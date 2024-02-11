// components/UserProfile.tsx
import Layout from "@/components/Layout";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";
import React, { Suspense } from "react";
import { AiFillBuild } from "react-icons/ai";
import { BiBuilding, BiPhone } from "react-icons/bi";
import {
  GoBriefcase,
  GoMail,
  GoPencil,
  GoPerson,
  GoProject,
} from "react-icons/go";

// Assuming you have a type for your user data
type User = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  agency: string;
  position: string;
};

function UserProfile({
  searchParams,
}: {
  searchParams: { id: string | undefined; include: string | undefined };
}) {
  const user = {
    name: "string;",
    lastName: "string;",
    email: "string;",
    phone: " string;",
    agency: "string;",
    position: "string;",
  };
  return (
    <Layout title="პროფილი">
      <div className="w-full mx-auto">
        <div className="bg-white scroll-none shadow rounded-lg p-3">
          <div className="pb-3 p-3 border-b mb-1 flex">
            <Image
              src="/profile.png"
              width={68}
              height={68}
              alt="user profile pic"
            />
            <div className="ml-4">
              <p className="mb-1">
                {user.name} {user.lastName}
              </p>
              <div className="flex w-30 h-7 bg-[#F5F8FF] align-middle items-center rounded-lg justify-center">
                {user.agency} <GoPencil className="ml-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {/* First Column */}
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-2">
                <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                  პირადი ინფორმაცია
                </h4>
                <div className="min-h-32 rounded-xl px-3 py-1 text-sm border border-[#C9D0E14D]">
                  <div className="flex h-10 items-center">
                    <GoPerson />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex h-10 items-center">
                    <GoProject />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex h-10 items-center">
                    <BiBuilding />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex h-10 items-center">
                    <GoBriefcase />
                    <span className="ml-2"></span>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                  საკონტაქტო ინფორმაცია
                </h4>
                <div className="min-h-32 rounded-xl px-3 py-1 text-sm border border-[#C9D0E14D]">
                  <div className="flex h-10 items-center">
                    <GoMail />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex h-10 items-center">
                    <BiPhone />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex h-10 items-center">
                    <BiPhone />
                    <span className="ml-2"></span>
                  </div>
                </div>
              </div>
              {/* <div className="mb-2">
              <h4 className="text-[12px]  h-9 px-3 py-2.5 text-[#919191] uppercase">საკონტაქტო ინფორმაცია</h4>
                <div className="h-32 rounded-xl px-2 py-1 text-sm border border-[#C9D0E14D]">
                 
                </div>
              </div> */}
            </div>

            {/* Second Column */}
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[12px] h-9 px-3 py-2.5 text-[#919191] uppercase">
                ისტორია
              </h4>
              <div className="h-96 py-1  text-sm rounded-xl border border-[#C9D0E14D]">
                <div className="py-2 px-3 min-h-23 flex flex-col border-[#C9D0E14D] border-b">
                  <span className="font-bold text-sm text-[#1A1F36]">
                    სათაური
                  </span>
                  <span className="font-400 text-sm text-[#1A1F36]">
                    ისტორია
                  </span>
                  <span className="text-[#919191] text-sm">11:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
