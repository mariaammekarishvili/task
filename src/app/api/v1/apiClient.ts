import { User } from "@/types/types";
import axios from "axios";
import { parseCookies } from "nookies";

export const API = "http://localhost:3000/api/v1";
const cookies = parseCookies();
const token = cookies.token;

export async function addUser(userData: any) {
  try {
    const response = await axios.post(`${API}/users/add`, {
      body: userData,
      headers: `Bearer ${token}`,
    });
    console.log("User added successfully:", response.data);
  } catch (error) {
    console.error("Error adding user:", error);
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
    setResponsType("error");
  }

  setTimeout(() => {
    setResponsType(null);
  }, 2000);
}

