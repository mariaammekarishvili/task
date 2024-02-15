"use client";

import axios from "axios";
import "tailwindcss/tailwind.css";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { PiPersonSimple, PiPersonSimpleBold } from "react-icons/pi";

import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import { GetServerSideProps } from "next";
import TableActions from "@/components/UserTable/TableActions/TableActions";
import { BsPersonDash } from "react-icons/bs";
import { useUser } from "@/contexts/UserContext";
import Modal from "@/components/Modal/Modal";
import RoleRegistrationForm from "@/components/RoleRegistration/RoleRegistration";

interface RolesProps {
  roles?: Roles[];
}
const Roles: React.FC<RolesProps> = ({ roles }) => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [client, setClient] = useState(false);

  const { userRef } = useUser();
  const userRole = userRef.current?.role.name;

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return;
  return (
    <Layout title="როლები">
      <div className="pt-2.5 px-5 flex items-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <Button onClick={() => setIsModalOpen(true)} type="light">
          დამატება
        </Button>
      </div>
      <Modal
        isOpen={modalOpen}
        title={"მომხმარებლის დამატება"}
        onClose={() => setIsModalOpen(false)}
      >
        <RoleRegistrationForm setModalOpen={setIsModalOpen} />
      </Modal>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-[14px] bg-white font-normal text-[#636971] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
              სახელი
            </th>
            <th scope="col" className="px-6 py-3 font-normal  text-[14px]">
              აღწერა
            </th>
            <th scope="col" className="px-6 py-3 font-normal  text-[14px]"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="text-black">
          {roles?.length &&
            roles?.map((role, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{role.name}</td>
                <td className="px-6 py-4">{role.description}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>

                <td className="px-6 py-4 flex items-center">
                  <BsPersonDash className="mr-2" color="gray" />
                  {role.permissions.users.length}
                </td>
                <td className="px-6 py-4 relative">
                  {userRole !== "user" && <TableActions id={role.id} isRole />}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = parseCookies(context);
    const token = cookies.token;

    const response = await axios.get("http://localhost:3000/api/v1/role", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      props: {
        roles: response.data.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch roles", error);
    return {
      props: {
        roles: [],
      },
    };
  }
};

export default Roles;
