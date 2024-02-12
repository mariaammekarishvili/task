"use client";

import { UserProvider } from "@/contexts/UserContext";
import LogIn from "./logIn/page";
import Users from "./users/page";

export default function Home() {
  const token = localStorage.getItem("token");

  return <UserProvider>{token ? <Users /> : <LogIn />}</UserProvider>;
}
