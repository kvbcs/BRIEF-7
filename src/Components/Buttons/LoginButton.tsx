"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineLogin } from "react-icons/hi";

const LoginButton = () => {
	const { push } = useRouter();
	return (
		<div>
			<button
				onClick={() => {
					push("/login");
				}}
				className="p-3 w-[150px] border-2 border-[#AE9159] bg-black text-[#AE9159] rounded-lg flex flex-row justify-center items-center gap-3"
			>
				<HiOutlineLogin />
				Login
			</button>
		</div>
	);
};

export default LoginButton;
