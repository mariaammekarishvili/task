"use client";

import { useEffect } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import Users from "@/pages/users";

export default function Home() {
  const cookies = parseCookies();
  const router = useRouter();

  useEffect(() => {
    if (!cookies.token) {
      router.push("/login");
    } else {
      router.push("/users");
    }
  }, []);

  return <Users />;
}
