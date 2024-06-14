"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterButton = () => {
	const { push } = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					push("/register");
				}}
				className="p-3 w-[150px] bg-[#AE9159] text-black rounded-lg"
			>
				Register
			</button>
		</div>
	);
};

export default RegisterButton;
