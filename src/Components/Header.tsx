"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
	const { push } = useRouter();

	return (
		<header className="bg-black w-full h-[10vh] flex flex-row items-center justify-between px-5">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/2560px-Bitcoin_logo.svg.png"
				alt=""
				className="h-8"
			/>
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
			<button
				onClick={() => {
					window.sessionStorage.removeItem("token");
					push("/");
				}}
				className="bg-red-500 p-3 rounded-lg"
			>
				Disconnect
			</button>
		</header>
	);
};

export default Header;
