import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Crypto $hop",
	description: "A crypto exchange market",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster />
				<main className=" min-h-[100vh] max-h-fit flex flex-col bg-slate-900 pb-[100px]">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
