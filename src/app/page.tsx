"use client";

import { useLayoutEffect } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";

import Users from "@/pages/users";

export default function Home() {
  const cookies = parseCookies();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!cookies.token) {
      router.push("/logIn");
    } else {
      router.push("/users");
    }
  }, []);

  return <Users />;
}
