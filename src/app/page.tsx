"use client";

import { UserProvider } from "@/contexts/UserContext";
import LogIn from "../pages/logIn";

export default function Home() {

  return <UserProvider><LogIn/></UserProvider>;
}
