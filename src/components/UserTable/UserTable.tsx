"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationForm";

import TableActions from "./TableActions/TableActions";

interface UserTableProps {
  users?: [];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="pt-2.5 px-5 flex items-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <Button onClick={() => setIsModalOpen(true)} type="light">
            დამატება
          </Button>
        </div>
        <label className="sr-only">Search</label>
        <div className="relative  ml-3">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="შეიყვანეთ სახელი"
          />
        </div>
      </div>
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-6 h-6 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="font-normal">Neil</div>
              </div>
            </th>
            <td className="px-6 py-4">მეკა</td>
            <td className="px-6 py-4">სსიპ ციფრული...</td>
            <td className="px-6 py-4">დიზაინერი</td>
            <td className="px-6 py-4">ariam@gmail</td>
            <td className="px-6 py-4">593 400</td>

            <td className="px-6 py-4 relative">
              <TableActions />
            </td>
          </tr>
        
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        title={"მომხმარებლის დამატება"}
        onClose={() => setIsModalOpen(false)}
      >
        <UserRegistrationForm />
      </Modal>
    </>
  );
};

export default UserTable;
