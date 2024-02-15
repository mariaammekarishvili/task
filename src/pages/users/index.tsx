"use client";

import { useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { parseCookies } from "nookies";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import TableActions from "@/components/UserTable/TableActions/TableActions";
import TableFilters from "@/components/UserTable/TableFilters/TableFilters";
import Layout from "@/components/Layout";
import { UsersArray } from "@/types/types";
import profilePic from "../../../public/uploads/user-img.jpg";

interface UsersProps {
  users?: UsersArray;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const cookies = parseCookies();
  const router = useRouter();
  const userId = cookies.userId;
  const [client, setClient] = useState(false);

  useLayoutEffect(() => {
    if (!cookies.token) {
      router.push("/logIn");
    } else {
      router.push("/users");
    }
    setClient(true);
  }, []);

  if (!client) return;

  return (
    <Layout title="მომხმარებლები">
      <>
        <TableFilters />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-[14px] bg-white font-normal text-[#636971] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                სახელი
              </th>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                გვარი
              </th>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                უწყება
              </th>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                თანამდებობე
              </th>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                ელ. ფოსტა
              </th>
              <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
                მობილური
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-black">
            {users?.length &&
              users?.map((user, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      src={profilePic}
                      className="rounded-50 border-gray-400 border-px"
                      width={24}
                      height={24}
                      alt={user.name + " image"}
                    />
                    <div className="ps-3">
                      <Link href={`users/profile?id=${userId}`}>
                        <div className="font-normal">{user.name}</div>
                      </Link>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.lastName}</td>
                  <td className="px-6 py-4">
                    {user.agency + " " + user.position}
                  </td>
                  <td className="px-6 py-4">{user?.role?.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>

                  <td className="px-6 py-4 relative">
                    <TableActions id={user.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { name, lastName, agency, role } = query;

  try {
    const cookies = parseCookies(context);
    const token = cookies.token;

    const response = await axios.get("http://localhost:3000/api/v1/users", {
      params: { name, lastName, agency, role },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      props: {
        users: response.data.data,
      },
    };
  } catch (error: any) {
    console.error("Failed to fetch users", error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
