import { AllCryptoProps, assetsProps } from "@/Utils/types";
import React from "react";
import { CreateOfferModal } from "../Modal/CreateOfferModal";
type userHasCryptoType = {
	Crypto: AllCryptoProps;
};

const AllAssetsCards = ({ assetsList }: { assetsList: assetsProps }) => {
	return (
		<div>
			<div className="bg-black w-full mt-8  rounded-lg flex flex-col justify-evenly items-center">
				<p>First Name : {assetsList.firstName}</p>
				<p>Last Name : {assetsList.lastName}</p>
				<p>Pseudo : {assetsList.pseudo}</p>
				<p>Wallet : {assetsList.dollarAvailables} $</p>
			</div>
			<div className="flex flex-col overflow-y-auto h-[300px] w-[300px] p-5 bg-black">
				{assetsList.UserHasCrypto.map((element: any) => {
					return (
						<div className="w-full flex flex-row flex-wrap gap-[50px]">
							<div
								key={element.Crypto.id}
								className="flex justify-between flex-row flex-wrap items-center w-[500px] h-[300px] bg-black"
							>
								<img src={element.Crypto.image} alt="" />
								<p>Crypto name : {element.Crypto.name}</p>
								<p>Crypto value : {element.Crypto.value}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllAssetsCards;
