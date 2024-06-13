"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import { getAllCrypto } from "@/Services/crypto";
import { AllCryptoProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = (crypto: AllCryptoProps) => {
	const [cryptoList, setCryptoList] = useState<AllCryptoProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllCrypto()
			.then((res) => {
				setCryptoList(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [isReloadNeeded]);

	return (
		<div>
			<div className="flex flex-row flex-wrap gap-[50px] px-9 items-center justify-center">
				{cryptoList &&
					cryptoList?.map((crypto) => {
						return (
							<div key={crypto.id}>
								<CryptoCards
									crypto={crypto}
									isBuyVisible={true}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
