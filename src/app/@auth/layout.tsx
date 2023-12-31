import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Auth / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
