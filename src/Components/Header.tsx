"use client";
import { useRouter } from "next/navigation";
import React from "react";

export type HeaderProps = {
	children: React.ReactNode;
};
const Header = ({ children }: HeaderProps) => {
	const { push } = useRouter();

	return (
		<header className="bg-black w-full h-[10vh] flex flex-row items-center justify-between px-5">
			<div className="h-[90%] w-[100px]">
				<img src="Logo.png" alt="" className="h-full w-full" />
			</div>
			<ul className="flex flex-row gap-[50px]">
				<button
					onClick={() => {
						push("/crypto/all");
					}}
				>
					Crypto
				</button>
				<button
					onClick={() => {
						push("/trade/all");
					}}
				>
					Trade
				</button>
				<button
					onClick={() => {
						push("/offer/all");
					}}
				>
					Offer
				</button>
				<button
					onClick={() => {
						push("/user/my-assets");
					}}
				>
					My Assets
				</button>
				<button
					onClick={() => {
						push("/user/users-assets");
					}}
				>
					All Users
				</button>
			</ul>
			{children}
		</header>
	);
};

export default Header;
