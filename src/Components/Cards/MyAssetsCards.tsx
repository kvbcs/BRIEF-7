import { assetsProps } from "@/Utils/types";
import React from "react";

const MyAssetsCards = (assets: assetsProps) => {
	return (
		<div>
			<p>{assets.firstName}</p>
			<p>{assets.lastName}</p>
			<p>{assets.pseudo}</p>
			<p>{assets.dollarAvailables}</p>
			<p>{assets.UserHasCrypto.name}</p>
			<p>{assets.UserHasCrypto.image}</p>
			<p>{assets.UserHasCrypto.quantity}</p>
			<p>{assets.UserHasCrypto.value}</p>
		</div>
	);
};

export default MyAssetsCards;
