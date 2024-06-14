"use client";

import OfferCards from "@/Components/Cards/OfferCards";
import Header from "@/Components/Header";
import { getAllOffer } from "@/Services/offer";
import { AllOfferProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
	const [offerList, setOfferList] = useState<AllOfferProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllOffer()
			.then((res) => {
				setOfferList(res.data);
				setIsReloadNeeded(false);
				console.log(res.data);
			})
			.catch((e) => {
				setIsReloadNeeded(false);
				console.log(e);
			});
	}, [isReloadNeeded]);

	return (
		<div>
			<Header/>
			{offerList &&
				offerList.map((offer) => {
					return (
						<div key={offer.id_user}>
							<OfferCards
								offer={offer}
								setIsReloadNeeded={setIsReloadNeeded}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default page;
