//src/utils/axios-client.ts
import axios from "axios";

const axiosClient = axios.create({
    // production
    baseURL: "https://api.invixinvitation.com",

    // dev
    // baseURL: "http://127.0.0.1:8082",


    withCredentials: true, // penting biar cookie ikut terkirim
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
