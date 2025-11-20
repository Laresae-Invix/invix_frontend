// invix-landing-page/src/hooks/api/use-register.tsx
import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/register-service";
import { toast } from "react-hot-toast";
import type { RegisterPayload } from "@/types/auth";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (data) => {
      toast.success("Registrasi berhasil!");
      console.log("Register success:", data);
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(error?.response?.data?.error || "Registrasi gagal");
    },
  });
};
