import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [],
};