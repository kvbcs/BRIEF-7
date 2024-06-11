"use client";

import OfferCards from "@/Components/Cards/OfferCards";
import { getAllOffer } from "@/Services/offer";
import { AllOfferProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
	const [offerList, setOfferList] = useState<AllOfferProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllOffer().then((res) => {
			setOfferList(res.data);
			console.log(res.data);
		});
	}, [isReloadNeeded]);

	return (
		<div>
			<button
				className="bg-sky-500 p-3 rounded-full"
				onClick={() => {
					window.sessionStorage.removeItem("token");
					push("/");
				}}
			>
				Disconnect
			</button>
			{offerList &&
				offerList.map((offer) => {
					return (
						<div key={offer.id_user}>
							<OfferCards offer={offer} />
						</div>
					);
				})}
		</div>
	);
};

export default page;
