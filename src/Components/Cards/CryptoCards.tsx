import { AllCryptoProps } from "@/Utils/types";
import React from "react";

const CryptoCards = (crypto: AllCryptoProps) => {
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
						Value : {crypto.value} $
					</p>
				</div>
				<p className="block font-sans text-sm font-normal leading-normal text-white antialiased opacity-75">
					Quantity : {crypto.quantity}
				</p>
			</div>
			<div className="p-6 pt-0">
				<button
					className="block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					type="button"
				>
					Buy
				</button>
			</div>
		</div>
	);
};

export default CryptoCards;
