"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DisconnectButton = () => {
	const { push } = useRouter();
	return (
		<button
			onClick={() => {
				window.sessionStorage.removeItem("token");
				push("/");
			}}
			className="bg-red-500 p-3 rounded-lg w-[200px]"
		>
			Disconnect
		</button>
	);
};

export default DisconnectButton;
