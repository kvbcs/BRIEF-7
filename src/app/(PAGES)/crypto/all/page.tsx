"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import Header from "@/Components/Header";
import { CreateCryptoModal } from "@/Components/Modal/CreateCryptoModal";
import Search from "@/Components/Search";
import { getAllCrypto } from "@/Services/crypto";
import { AllCryptoProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar, ThreeCircles } from "react-loader-spinner";

const page = ({ crypto }: { crypto: AllCryptoProps }) => {
	const [cryptoList, setCryptoList] = useState<AllCryptoProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		setIsLoading(true);
		getAllCrypto()
			.then((res) => {
				setCryptoList(res.data);
				toast.success("Loading completed");
				setIsLoading(true);
			})
			.catch((e) => {
				toast.error("Server error");
				console.log(e);
				setIsLoading(false);
			});
	}, []);

	if (!isLoading) {
		return (
			<div className="h-screen w-full gap-[100px] flex flex-col justify-center items-center">
				<h1 className="text-3xl">LOADING...</h1>
				<CirclesWithBar
					height="400"
					width="400"
					color="#4fa94d"
					outerCircleColor="gold"
					innerCircleColor="gold"
					barColor="gold"
					ariaLabel="circles-with-bar-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);
	}

	return (
		<div>
			<Header />

			<div className="flex flex-col justify-center items-center gap-[50px] my-[50px] text-3xl">
				<h1>All Crypto</h1>
				<CreateCryptoModal />
			</div>

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
