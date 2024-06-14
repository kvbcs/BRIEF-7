"use client";
import { useRouter } from "next/navigation";
import React from "react";
import DisconnectButton from "./Buttons/DisconnectButton";

const Header = () => {
	const { push } = useRouter();

	return (
		<header className="bg-black w-full h-[10vh] flex flex-row items-center justify-between px-5">
			<div className="h-[90%] w-[100px] border-2">
				<img
					src="/public/Logo.png"
					alt="logo"
					className="h-full w-full"
				/>
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
			<DisconnectButton />
		</header>
	);
};

export default Header;
