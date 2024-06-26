import { AllPromoProps } from "@/Utils/types";
import React from "react";

const PromoCards = ({ promo: promo }: AllPromoProps) => {
	return (
		<div className="flex flex-col justify-evenly items-center my-36 h-[40vh]">
			<div className="bg-sky-900 h-full w-fit px-14 flex flex-col items-center justify-evenly rounded-md">
				<p>name: {promo.name}</p>

				<p>value : {promo.value}</p>
			</div>
		</div>
	);
};

export default PromoCards;
