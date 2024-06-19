"use client";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import Header from "@/Components/Header";
import { getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const page = (assets: assetsProps) => {
	const [assetsList, setAssetsList] = useState<assetsProps>();
	console.log(assetsList?.firstName);
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		const getMydata = async () => {
			await getMyAssets()
				.then((res) => {
					setAssetsList(res.data);
					setIsReloadNeeded(true);
				})
				.catch((e) => {
					console.log(e.stack);
				});
		};
		getMydata();
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
			<div className="w-full flex flex-row justify-center text-3xl items-center my-24">
				<h1>My Assets</h1>
			</div>
			<div className="flex flex-row flex-wrap gap-[50px] justify-center px-9">
				<MyAssetsCards assetsList={assetsList} />
			</div>
		</div>
	);
};

export default page;
