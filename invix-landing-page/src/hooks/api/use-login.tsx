// src/hooks/api/use-login.tsx
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkAuth, loginManual, loginWithGoogle } from "../../services/login-service";

export const useLoginWithGoogle = () => {
	return useMutation({
		mutationFn: async () => {
			await loginWithGoogle();
		},
	});
};


export const useLoginManual = () => {
    return useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            return await loginManual(email, password);
        },
    });
};

export const useCheckAuth = () => {
	return useQuery({
		queryKey: ["auth"],
		queryFn: async () => await checkAuth(),
		retry: false,
	});
};
