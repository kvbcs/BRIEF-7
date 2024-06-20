import { AllCryptoProps } from "@/Utils/types";
import React from "react";
import { BuyCryptoModal } from "../Modal/BuyCryptoModal";

const CryptoCards = ({
	crypto,
	isBuyVisible,
}: {
	crypto: AllCryptoProps;
	isBuyVisible: boolean;
}) => {
	return (
		<div className="relative flex w-96 flex-col rounded-xl bg-black text-white bg-clip-border shadow-md">
			<div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-white">
				<img
					src={crypto.image}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="p-6">
				<div className="mb-2 flex items-center justify-between">
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{crypto.name}
					</p>
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						Value : <span className="text-[green]">{crypto.value} $</span>
					</p>
				</div>
				<p className="block font-sans text-sm font-normal leading-normal text-white antialiased opacity-75">
					Quantity : {crypto.quantity}
				</p>
			</div>
			<div className="p-6 pt-0">
				<BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
			</div>
		</div>
	);
};

export default CryptoCards;
