"use client";
import CryptoCards from "@/Components/Cards/CryptoCards";
import TradeCards from "@/Components/Cards/TradeCards";
import { getAllCrypto } from "@/Services/crypto";
import { getAllTrade } from "@/Services/trade";
import { AllTradeProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = (trade: AllTradeProps) => {
	const [tradeList, setTradeList] = useState<AllTradeProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllTrade().then((res) => {
			setTradeList(res.data);
			console.log(res.data);
		});
	}, [isReloadNeeded]);

	return (
		<div>
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
