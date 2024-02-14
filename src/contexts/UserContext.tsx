"use client";

import { User } from "@/types/types";
import React, {
  createContext,
  useContext,
  useRef,
  MutableRefObject,
} from "react";

type UserContextType = {
  userRef: MutableRefObject<User | null>;
};

const UserContext = createContext<UserContextType>({
  userRef: { current: null },
});

// UserProvider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const userRef = useRef<User | null>(null); // Initialize user state with null

  return (
    <UserContext.Provider value={{ userRef }}>{children}</UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);
