"use client";

import { useLayoutEffect } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";
import { useTheme } from "next-themes";

import LogIn from "@/pages/logIn";

export default function Home() {
  const cookies = parseCookies();
  const router = useRouter();
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    setTheme("light")
    if (!cookies.token) {
      router.push("/");
    } else {
      router.push("/users");
    }
  }, []);

  return (
    <>
      <LogIn />
    </>
  );
}
