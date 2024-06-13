import { AllOfferProps } from "@/Utils/types";
import React from "react";
import CryptoCards from "./CryptoCards";
import toast from "react-hot-toast";
import { buyOffer } from "@/Services/offer";

const OfferCards = ({
	offer,
	setIsReloadNeeded,
}: {
	offer: AllOfferProps;
	setIsReloadNeeded: any;
}) => {
	function handleCryptoBuyViaOffer(offerId: string) {
		buyOffer(offerId)
			.then((res) => {
				if (res.status === 204) {
					toast.error("Item already sold");
				}
				if (res.status === 201) {
					toast.success("Success");
					setIsReloadNeeded(true);
				}
			})
			.catch((e) => {
				console.log(e), toast.error("Coin not for sale");
			});
	}
	return (
		<div className="flex flex-col justify-evenly items-center my-36 gap-[100px] border-2 h-fit">
			<div className="bg-sky-900 h-fit w-fit px-14 flex flex-col items-center justify-evenly rounded-md">
				<p>Number of tokens : {offer.amount}</p>
				<p>Seller : {offer.User.pseudo}</p>

				<CryptoCards crypto={offer.Crypto} isBuyVisible={false} />
				<div className="w-full flex justify-end">
					<button
						className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
						onClick={() => {
							handleCryptoBuyViaOffer(offer.id);
						}}
					>
						Buy
					</button>
				</div>
			</div>
		</div>
	);
};

export default OfferCards;
