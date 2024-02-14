import { Role, User } from "@/types/types";
import axios from "axios";
import router from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { SetStateAction } from "react";

export const API = "http://localhost:3000/api/v1";
const cookies = parseCookies();
const authToken = cookies.token;
const token = authToken.replace('token=', '');

function setTokenInCookie(token: string) {
  setCookie(null, "token", token, {
    maxAge: 30 * 24 * 60 * 60, //  time in seconds -30days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //policy for security
  });
}

export const logIn = async (
  values: { username: string; password: string },
  setUser: (
    value: User | null | ((prevState: User | null) => User | null)
  ) => void
) => {
  try {
    const response = await axios.post(`${API}/sign-in`, {
      username: values.username,
      password: values.password,
    });
    if (response?.status === 200) {
      const token = response.data.data.token;
      const user = response.data.data.user;

      const updatedUser = {
        ...user,
        token,
      };
      setUser(updatedUser);
      setTokenInCookie(token);
    }
  } catch (error: any) {
    console.error(error);
  }
};
export async function addUser(userData: any) {
  try {
    const response = await axios.post(`${API}/users/add`, {
      body: userData,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User added successfully:", response.data);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

export async function addRole(data: any) {
    try {
      const response = await axios.post(`${API}/role/add`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Role added successfully:", response.data);
    } catch (error) {
      console.error("Error adding role:", error);
    }
  }
export async function deleteUser(
  userId: number,
  setOpenModal: (arg0: boolean) => void,
  setResponsType: (arg0: "error" | "success" | null) => void
) {
  try {
    const response = await axios.delete(`${API}/users/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal(false);
    setResponsType("success");
    console.log("User deleted successfully:", response.data);
  } catch (error) {
    console.error("Error deleting user:", error);
    setOpenModal(false);
    setResponsType("error");
  }

  setTimeout(() => {
    setResponsType(null);
  }, 2000);
}

export async function deleteRole(
  roleId: number,
  setOpenModal: (arg0: boolean) => void,
  setResponsType: (arg0: "error" | "success" | null) => void
) {
  try {
    const response = await axios.delete(`${API}/role/delete/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal(false);
    setResponsType("success");
    console.log("User deleted successfully:", response.data);
  } catch (error) {
    console.error("Error deleting user:", error);
    setOpenModal(false);
    setResponsType("error");
  }

  setTimeout(() => {
    setResponsType(null);
  }, 2000);
}
