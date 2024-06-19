import { AllOfferProps } from "@/Utils/types";
import React from "react";
import CryptoCards from "./CryptoCards";
import toast from "react-hot-toast";
import { buyOffer } from "@/Services/offer";
import { FaShoppingCart } from "react-icons/fa";

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
				console.log(e), toast.error("Coin not available anymore");
			});
	}
	return (
		<div className="flex flex-col items-center my-16 h-fit w-full">
			<div className="bg-[#caad4f] h-fit w-fit p-4 flex flex-col  gap-[20px] items-center justify-start rounded-lg text-black">
				<div className="flex flex-row w-full">
					<div className="flex flex-col w-full">
						<p>Number of tokens : {offer.amount}</p>
						<p>Seller : {offer.User.pseudo}</p>
					</div>
					<div className="w-full flex justify-end">
						<button
							className="bg-black text-center flex flex-row justify-center items-center gap-3 rounded-lg text-white w-20 p-2 text-éxl mt-1"
							onClick={() => {
								handleCryptoBuyViaOffer(offer.id);
							}}
						>
							<FaShoppingCart />
							Buy
						</button>
					</div>
				</div>
				<CryptoCards crypto={offer.Crypto} isBuyVisible={false} />
			</div>
		</div>
	);
};

export default OfferCards;
