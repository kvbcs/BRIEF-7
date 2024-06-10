"use client";
import { getAllCrypto } from "@/Services/crypto";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
	const [cryptoList, setCryptoList] = useState();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllCrypto().then((res) => {
			setCryptoList(res.data);
			console.log(res.data);
		});
	}, [isReloadNeeded]);

	return (
		<div>
			<button
				className="bg-sky-500 p-3 rounded-full"
				onClick={() => {
					window.localStorage.removeItem("token");
					push("/");
				}}
			>
				Disconnect
			</button>
		</div>
	);
};

export default page;
