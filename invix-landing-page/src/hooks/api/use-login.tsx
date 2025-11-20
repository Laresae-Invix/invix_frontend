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

type LoginVariables = {
	email: string;
	password: string;
};

export const useLoginManual = () => {
	return useMutation<void, Error, LoginVariables>({
		mutationFn: async ({ email, password }) => {
			await loginManual(email, password);
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
