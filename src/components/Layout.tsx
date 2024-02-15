import React, { ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

import { useUser } from "@/contexts/UserContext";
import profilePic from "../../public/uploads/user-img.jpg";
import Toasts from "./Toast/Toast";
import Logo from "../../public/logo_1.png";
interface WrapperProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<WrapperProps> = ({
  children,
  title = "მომხმარებლები",
}) => {
  const { userRef } = useUser();
  const user = userRef.current;

  return (
    <>
      <Toasts />
      <div className="p-2.5 bg-[#F4F5F9] h-[100vh] w-full">
        <nav className="top-2.5 left-[85px] z-50 w-full pl-[85px]">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                  <span className="self-center text-[16px] font-semibold  whitespace-nowrap dark:text-white">
                    {title}
                  </span>
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <Link href={`/users/profile?id=${user?.id}`}>
                      <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <Image
                          src={profilePic}
                          className="rounded-[50%] border-gray-400 border-px"
                          width={32}
                          height={32}
                          alt={"profile"}
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          className="fixed top-2.5 left-2.5 rounded-xl z-40 w-[60px] h-[98vh] pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
            <ul className="space-y-2 font-medium">
              <Link href={"/users"}>
                <li className="mb-16">
                  <Image src={Logo} alt={"logo"} />
                </li>
              </Link>
              <li>
                <Link
                  href="/roles"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 19"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/users"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="left-[85px] z-50 w-full pl-[75px] pt-1.5">
          <div className="relative rounded-lg overflow-x-auto shadow-md sm:rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
