"use client";

import OfferCards from "@/Components/Cards/OfferCards";
import Header from "@/Components/Header";
import { CreateOfferModal } from "@/Components/Modal/CreateOfferModal";
import { getAllOffer } from "@/Services/offer";
import { AllOfferProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const page = () => {
	const [offerList, setOfferList] = useState<AllOfferProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllOffer()
			.then((res) => {
				setOfferList(res.data);
				setIsReloadNeeded(true);
				toast.success("Loading completed");
			})
			.catch((e) => {
				setIsReloadNeeded(false);
				toast.error("Server error");
				console.log(e);
			});
	}, [isReloadNeeded]);

	if (!isReloadNeeded) {
		return (
			<div className="h-screen w-full gap-[100px] flex flex-col justify-center items-center">
				<h1 className="text-3xl">LOADING...</h1>
				<CirclesWithBar
					height="400"
					width="400"
					color="#4fa94d"
					outerCircleColor="gold"
					innerCircleColor="gold"
					barColor="gold"
					ariaLabel="circles-with-bar-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<div className="flex flex-row justify-center items-center gap-[50px] my-[50px] text-3xl">
				<h1>All Offers</h1>
			</div>
			<div className="flex flex-row flex-wrap justify-evenly items-center gap-[50px] w-full h-fit">
				{offerList &&
					offerList.map((offer) => {
						return (
							<div key={offer.id_user} className="flex flex-row">
								<OfferCards
									offer={offer}
									setIsReloadNeeded={setIsReloadNeeded}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
