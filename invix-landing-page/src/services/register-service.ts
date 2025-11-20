import type { RegisterPayload } from "@/types/auth";
import axiosClient from "@/utils/axios-client";

export const register = async (data: RegisterPayload) => {
    const res = await axiosClient.post("/auth/register", data);
    return res.data;
};
