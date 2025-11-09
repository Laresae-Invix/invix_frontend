// src/hooks/api/use-login.tsx
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkAuth, loginWithGoogle } from "../../services/login-service";

export const useLogin = () => {
	return useMutation({
		mutationFn: async () => {
			await loginWithGoogle();
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
