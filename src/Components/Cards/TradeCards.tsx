import { AllTradeProps } from "@/Utils/types";
import React from "react";

const TradeCards = (trade: AllTradeProps) => {
	return (
		<div>
			<div>
				<img src={trade.Crypto.image} alt="" />
				<p>{trade.Crypto.name}</p>
				<p>{trade.Crypto.quantity}</p>
				<p>{trade.Crypto.value}</p>
			</div>
			<div className="flex flex-row w-full border-2">
				<div className="bg-red-500 w-1/2">
					<h2>Giver</h2>
					<p>{trade.Giver.firstName}</p>
					<p>{trade.Giver.lastName}</p>
					<p>{trade.Giver.pseudo}</p>
					<p>{trade.Giver.dollarAvailables}</p>
				</div>
				<div className="bg-green-500 w-1/2">
					<h2>Receiver</h2>
					<p>{trade.Receiver.firstName}</p>
					<p>{trade.Receiver.lastName}</p>
					<p>{trade.Receiver.pseudo}</p>
					<p>{trade.Receiver.dollarAvailables}</p>
				</div>
			</div>
		</div>
	);
};

export default TradeCards;
