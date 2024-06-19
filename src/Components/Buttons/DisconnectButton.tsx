"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const DisconnectButton = () => {
	const { push } = useRouter();
	return (
		<button
			onClick={() => {
				window.sessionStorage.removeItem("token");
				push("/");
			}}
			className="bg-red-500 p-3 rounded-lg flex flex-row items-center gap-[10px] justify-center w-[150px]"
		>
			<HiOutlineLogout />
			Disconnect
		</button>
	);
};

export default DisconnectButton;
