import { AllCryptoProps, assetsProps } from "@/Utils/types";
import React from "react";
import { CreateOfferModal } from "../Modal/CreateOfferModal";
type userHasCryptoType = {
	Crypto: AllCryptoProps;
};

const MyAssetsCards = ({ assetsList }: { assetsList: assetsProps }) => {
	return (
		<>
			<div className="bg-black w-fit mt-8 p-7 rounded-lg flex flex-col justify-evenly items-center">
				<p>First Name : {assetsList.firstName}</p>
				<p>Last Name : {assetsList.lastName}</p>
				<p>Pseudo : {assetsList.pseudo}</p>
				<p>Wallet : {assetsList.dollarAvailables} $</p>
			</div>
			<div className="px-6 flex flex-row flex-wrap items-center w-full justify-center gap-[50px]">
				{assetsList.UserHasCrypto.map((element: any) => {
					return (
						<div className="w-[300px] h-[500px] bg-black rounded-lg flex flex-row p-4 gap-[50px]">
							<div
								key={element.Crypto.id}
								className="flex justify-between flex-row flex-wrap items-center w-[500px]"
							>
								<img
									src={element.Crypto.image}
									alt=""
									className="h-[250px] w-full"
								/>
								<p>Crypto name : {element.Crypto.name}</p>
								<p>Crypto value : {element.Crypto.value} $</p>
								<p>Amount : {element.amount}</p>
								<div className="flex flex-row w-full justify-center">
									<CreateOfferModal id={element.Crypto.id} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default MyAssetsCards;
