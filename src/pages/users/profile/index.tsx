import "tailwindcss/tailwind.css";
import Image from "next/image";
import React from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import axios from "axios";
import { format } from "date-fns";
import { BiBuilding, BiPhone } from "react-icons/bi";
import {
  GoBriefcase,
  GoMail,
  GoPencil,
  GoPerson,
  GoProject,
} from "react-icons/go";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading/Loading";
import { API } from "../../../../config/axios.config";
import { User } from "@/types/types";
import profilePic from "../../../../public/uploads/user-img.jpg";

interface ProfileProp {
  user: User | null;
}

const UserProfile: React.FC<ProfileProp> = ({ user }) => {
  console.log(user);
  return (
    <Layout title="პროფილი">
      <div className="w-full mx-auto overflow-hidden	">
        <div className="bg-white shadow rounded-lg p-3">
          <div className="pb-3 p-3 border-b mb-1 flex">
            <Image
              src={profilePic}
              width={68}
              height={68}
              alt="user profile pic"
            />
            <div className="ml-4">
              <p className="mb-1">
                {user?.name} {user?.lastName}
              </p>
              <div className="flex min-w-30 h-7 px-2 bg-[#F5F8FF] align-middle items-center rounded-lg justify-center">
                {user?.role.name} <GoPencil className="ml-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-4">
            {/* First Column */}
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-2">
                <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                  პირადი ინფორმაცია
                </h4>
                {!user && <Loading />}
                {user && (
                  <div className="min-h-32 rounded-xl px-3 py-1 text-sm border border-[#C9D0E14D]">
                    <div className="flex h-10 items-center">
                      <GoPerson />
                      <span className="ml-2">
                        {user.name + " " + user.lastName}
                      </span>
                    </div>
                    <div className="flex h-10 items-center">
                      <BiBuilding />
                      <span className="ml-2">{user.agency}</span>
                    </div>
                    <div className="flex h-10 items-center">
                      <GoBriefcase />
                      <span className="ml-2">{user.position}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                  საკონტაქტო ინფორმაცია
                </h4>
                {!user && <Loading />}
                {user && (
                  <div className="min-h-32 rounded-xl px-3 py-1 text-sm border border-[#C9D0E14D]">
                    <div className="flex h-10 items-center">
                      <GoMail />
                      <span className="ml-2">{user.email}</span>
                    </div>
                    <div className="flex h-10 items-center">
                      <BiPhone />
                      <span className="ml-2">{user.phone}</span>
                    </div>
                    <div className="flex h-10 items-center">
                      <BiPhone />
                      <span className="ml-2">-</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Column */}
            <div className="w-full md:w-1/2 px-4 max-h-76">
              <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                ისტორია
              </h4>
              {!user && <Loading />}
              {user && (
                <>
                  <div className="h-[304px] py-1  text-sm rounded-xl border border-[#C9D0E14D]">
                    {user?.createdAt && (
                      <div className="py-2 px-3 min-h-23 flex flex-col border-[#C9D0E14D] border-b">
                        <span className="font-bold text-sm text-[#1A1F36]">
                          შექმნა
                        </span>
                        <span className="font-400 text-sm text-[#1A1F36]">
                          იუზერის შექმნა განხორციელდა
                        </span>
                        <span className="text-[#919191] text-sm">
                          {format(new Date(user.createdAt), "dd-MM-yyyy")}
                        </span>
                      </div>
                    )}
                    {user?.updatedAt && (
                      <div className="py-2 px-3 min-h-23 flex flex-col border-[#C9D0E14D] border-b">
                        <span className="font-bold text-sm text-[#1A1F36]">
                          ინფორმაციის განახლება
                        </span>
                        <span className="font-400 text-sm text-[#1A1F36]">
                          იუზერის ინფორმაცია განახლდა
                        </span>
                        <span className="text-[#919191] text-sm">
                          {format(new Date(user.updatedAt), "dd-MM-yyyy")}
                        </span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;

  try {
    const cookies = parseCookies(context);
    const token = cookies.token;

    const response = await axios.get(`${API}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      props: {
        user: response.data.data[0],
      },
    };
  } catch (error) {
    console.error("Failed to fetch user", error);
    return {
      props: {
        user: [],
      },
    };
  }
};
export default UserProfile;
