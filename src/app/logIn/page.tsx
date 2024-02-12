"use client";

import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import { GoPerson } from "react-icons/go";

import { API } from "../../../config/axios.config";
import { useUser } from "@/contexts/UserContext";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        `${API}/sign-in`,
        { username: values.username, password: values.password }
      );
      const { token, user } = response.data;
      const updatedUser = {
        ...user,
        token
      };
      setUser(updatedUser)
      
      router.push('/users');

    } catch (error: any) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return (
    <main className="md:px-0 px-2">
      <header className="h-[72px] p-6 flex md:justify-between justify-center items-center">
        <a href="/">
          <h1 className="text-lg font-700 font-bold">MY.GOV.GE</h1>
        </a>
        <h3 className="text-sm font-normal hidden md:flex	">დახმარება</h3>
      </header>
      <div
        className={
          "flex flex-col items-center justify-center md:px-6 py-8 mx-auto mt-[5%] lg:py-0"
        }
      >
        <h2
          className="flex items-center mb-6 text-base font-medium text-transform: uppercase;
          "
        >
          ავტორიზაცია
        </h2>
        <div className="rounded-lg md:mt-0 sm:max-w-md border border-[#D1E0FF] min-h-[478px] md:w-[451px] w-full">
          <div className="p-6 ">
            <div className="flex items-center justify-center flex-col mb-[12]">
              <div className="h-12 w-12 bg-[#F5F8FF] mb-[12px] flex items-center justify-center rounded-[10px]">
                <GoPerson color="#1F5EDD" size={20} />
              </div>
              <h3 className="w font-bold leading-tight tracking-tight text-sm uppercase text-transform: uppercase;">
                სახელით და პაროლით
              </h3>
              <span className="text-gray-500 mt-[12px] mb-4 text-sm align-middle text-center	w-[90%]">
                ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში
              </span>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium     ">
                  მომხმარებელი
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  className=" border border-[#C9D0E14D ] rounded-lg block w-full p-2.5 bg-white text-base	"
                  placeholder="superadmin@gmail.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium     ">
                  პაროლი
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="პაროლი"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className=" border border-[#C9D0E14D ] rounded-lg 0 block bg-white w-full p-2.5 text-base	"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-sm">მაჩვენე პაროლი</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex flex-row items-center ml-[auto] justify-center text-white p-[13px_20px] gap-2 w-[109px] h-[48px] bg-blue-600 border border-blue-600 shadow-xs rounded-md"
              >
                შესვლა
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
