"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { GiArchiveRegister } from "react-icons/gi";

const RegisterButton = () => {
	const { push } = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					push("/register");
				}}
				className="p-3 w-[150px] bg-[#AE9159] text-black rounded-lg flex flex-row justify-center items-center gap-3"
			>
				<GiArchiveRegister />
				Register
			</button>
		</div>
	);
};

export default RegisterButton;
