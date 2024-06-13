import { assetsProps } from "@/Utils/types";
import React from "react";

const MyAssetsCards = ({ assets }: { assets: assetsProps }) => {
	return (
		<div className="bg-black w-[400px] h-[200px] rounded-lg flex flex-col justify-evenly items-center">
			<p>First Name : {assets.firstName}</p>
			<p>Last Name : {assets.lastName}</p>
			<p>Pseudo : {assets.pseudo}</p>
			<p>Wallet : {assets.dollarAvailables}</p>
			<p>{assets.UserHasCrypto.name}</p>
			<p>{assets.UserHasCrypto.image}</p>
			<p>{assets.UserHasCrypto.quantity}</p>
			<p>{assets.UserHasCrypto.value}</p>
		</div>
	);
};

export default MyAssetsCards;
