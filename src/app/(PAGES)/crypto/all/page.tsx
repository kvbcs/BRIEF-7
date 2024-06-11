"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import { getAllCrypto } from "@/Services/crypto";
import { AllCryptoProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
	const [cryptoList, setCryptoList] = useState<AllCryptoProps[]>();
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
					window.sessionStorage.removeItem("token");
					push("/");
				}}
			>
				Disconnect
			</button>
			{cryptoList &&
				cryptoList.map((crypto) => {
					return (
						<div key={crypto.id}>
							<CryptoCards crypto={crypto} />
						</div>
					);
				})}
		</div>
	);
};

export default page;
