import { AllTradeProps } from "@/Utils/types";
import React from "react";

const TradeCards = (trade: AllTradeProps) => {
	return (
		<div className="h-[550px] w-[500px] my-8 flex flex-col gap-[20px] justify-between bg-black rounded-lg p-4">
			<div className="h-fit w-full bg-black">
				<img
					src={trade.Crypto.image}
					alt=""
					className="h-52 w-full rounded-lg"
				/>
				<p>Name : {trade.Crypto.name}</p>
				<p>Quantity : {trade.Crypto.quantity}</p>
				<p>Value : {trade.Crypto.value} $</p>
			</div>
			<div className="flex flex-row w-full border-2 h-fit">
				<div className="bg-blue-800 w-1/2 p-4">
					<h2 className="text-center">Giver</h2>
					<p>First name : {trade.Giver.firstName}</p>
					<p>Last Name : {trade.Giver.lastName}</p>
					<p>Pseudo : {trade.Giver.pseudo}</p>
					<p>Wallet : {trade.Giver.dollarAvailables} $</p>
				</div>
				<div className="bg-green-800 w-1/2 p-4">
					<h2 className="text-center">Receiver</h2>
					<p>First name : {trade.Receiver.firstName}</p>
					<p>Last name : {trade.Receiver.lastName}</p>
					<p>Pseudo : {trade.Receiver.pseudo}</p>
					<p>Wallet : {trade.Receiver.dollarAvailables} $</p>
				</div>
			</div>
		</div>
	);
};

export default TradeCards;
