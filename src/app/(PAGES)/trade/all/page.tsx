"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import TradeCards from "@/Components/Cards/TradeCards";
import Header from "@/Components/Header";
import { getAllCrypto } from "@/Services/crypto";
import { getAllTrade } from "@/Services/trade";
import { AllTradeProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const page = (trade: AllTradeProps) => {
	const [tradeList, setTradeList] = useState<AllTradeProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllTrade()
			.then((res) => {
				setTradeList(res.data);
				setIsReloadNeeded(true);
				toast.success("Loading completed");
			})
			.catch((e) => {
				toast.error("Server error");
				console.log(e);
			});
	}, [isReloadNeeded]);

	if (!isReloadNeeded) {
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
			<h1 className="my-10 h-28 flex items-center justify-center text-3xl">
				All Trades
			</h1>
			<div className="flex flex-row flex-wrap gap-[50px] px-9 items-center justify-center">
				{tradeList &&
					tradeList.map((trade) => {
						return (
							<div>
								<TradeCards
									Giver={trade.Giver}
									Receiver={trade.Receiver}
									Crypto={trade.Crypto}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
