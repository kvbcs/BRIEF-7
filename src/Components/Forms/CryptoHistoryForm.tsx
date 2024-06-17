"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import Header from "@/Components/Header";
import { CreateCryptoModal } from "@/Components/Modal/CreateCryptoModal";
import Search from "@/Components/Search";
import { getAllCrypto, getHistoryCrypto } from "@/Services/crypto";
import { AllCryptoProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";
import { CryptoHistoryModal } from "../Modal/CryptoHistoryModal";

export const CryptoHistoryForm = ({ id: string }: AllCryptoProps) => {
	const [cryptoList, setCryptoList] = useState<AllCryptoProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		setIsLoading(true);
		getHistoryCrypto(id)
			.then((res) => {
				setCryptoList(res.data);
				toast.success("Loading completed");
				setIsLoading(false);
			})
			.catch((e) => {
				toast.error("Loading failed");
				console.log(e);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading && (
				<div className="w-full flex flex-col items-center my-[100px] justify-center gap-[50px] h-fit">
					<h2 className="text-center text-3xl">LOADING...</h2>
					<ThreeCircles
						visible={true}
						height="400"
						width="500"
						color="#C0AA61"
						ariaLabel="three-circles-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			)}

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
