"use client";

import { UserProvider } from "@/contexts/UserContext";
import LogIn from "../pages/logIn";
import Users from "../pages/users";
import { useEffect } from "react";

export default function Home() {
  const token = localStorage.getItem("token");

  return <UserProvider><LogIn/></UserProvider>;
}
