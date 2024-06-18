import { AllCryptoProps, assetsProps } from "@/Utils/types";
import React from "react";
import { CreateOfferModal } from "../Modal/CreateOfferModal";
type userHasCryptoType = {
	Crypto: AllCryptoProps;
};

const MyAssetsCards = ({ assetsList }: { assetsList: assetsProps }) => {
	return (
		<div>
			<div className="bg-black w-full mt-8  rounded-lg flex flex-col justify-evenly items-center">
				<p>First Name : {assetsList.firstName}</p>
				<p>Last Name : {assetsList.lastName}</p>
				<p>Pseudo : {assetsList.pseudo}</p>
				<p>Wallet : {assetsList.dollarAvailables} $</p>
			</div>
			{assetsList.UserHasCrypto.map((element: any) => {
				return (
					<div className="w-full flex flex-row flex-wrap gap-[50px]">
						<div
							key={element.Crypto.id}
							className="flex justify-between flex-row flex-wrap items-center w-[500px]"
						>
							<img src={element.Crypto.image} alt="" />
							<p>Crypto name : {element.Crypto.name}</p>
							<p>Crypto value : {element.Crypto.value}</p>
							<CreateOfferModal id={element.Crypto.id} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MyAssetsCards;
