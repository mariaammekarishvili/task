import { User } from "@/types/types";
import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { toast } from "react-toastify";

export const API = "http://localhost:3000/api/v1";
const cookies = parseCookies();
const authToken = cookies.token;
const token = authToken?.replace("token=", "");

function setTokenInCookie(token: string) {
  setCookie(null, "token", token, {
    maxAge: 30 * 24 * 60 * 60, //  time in seconds -30days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //policy for security
  });
}

function setUserId(token: string) {
  setCookie(null, "userId", token, {
    maxAge: 30 * 24 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
}

export const logIn = async (
  values: { username: string; password: string },
  setUser: (
    value: User | null | ((prevState: User | null) => User | null),
  ) => void,
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
      setUserId(user.id);
    }
  } catch (error: any) {
    console.error(error);
  }
};

export async function addUser(userData: any) {
  try {
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    const response = await axios.post(`${API}/users/add`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    });

    console.log("User added successfully:", response.data);
    toast.success("მომხმარებელი წარმატებით დაემატა");
    return response.data; // Optionally return response data
  } catch (error) {
    console.error("Error adding user:", error);
    toast.error("დაფიქსირდა შეცდომა!!");
    throw error; // Rethrow the error to handle it in the calling code
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
    toast.success("როლი წარმატებით დაემატა");
  } catch (error) {
    console.error("Error adding role:", error);
    toast.error("დაფიქსირდა შეცდომა!!");
  }
}
export async function deleteUser(
  userId: number,
  setOpenModal: (arg0: boolean) => void,
) {
  try {
    const response = await axios.delete(`${API}/users/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal(false);
    console.log("User deleted successfully:", response.data);
    toast.success("მომხმარებელი წარმატებით წაიშალა");
  } catch (error) {
    console.error("Error deleting user:", error);
    setOpenModal(false);
    toast.error("დაფიქსირდა შეცდომა!!");
  }
}

export async function deleteRole(
  roleId: number,
  setOpenModal: (arg0: boolean) => void,
) {
  try {
    const response = await axios.delete(`${API}/role/delete/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal(false);
    console.log("როლი deleted successfully:", response.data);
    toast.success("როლი წარმატებით წაიშალა");
  } catch (error) {
    console.error("Error deleting user:", error);
    setOpenModal(false);
    toast.error("დაფიქსირდა შეცდომა!!");
  }
}
