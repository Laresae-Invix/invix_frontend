//src/services/login-service.ts
import axiosClient from "@/utils/axios-client";

export const loginWithGoogle = async (): Promise<void> => {
    window.location.href = `${axiosClient.defaults.baseURL}/auth/google`;
};

export const loginManual = async (email: string, password: string ): Promise<void> => {
    const res = await axiosClient.post("/auth/login", { email, password });
    return res.data;
};

export const checkAuth = async () => {
    const res = await axiosClient.post("/auth/Checkhelt");
    console.log("res.  : ", res)
    return res.data;
};
