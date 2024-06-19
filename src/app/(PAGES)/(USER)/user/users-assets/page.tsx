"use client";
import AllAssetsCards from "@/Components/Cards/AllAssetsCards";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import Header from "@/Components/Header";
import { getAllAssets, getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const page = (assets: assetsProps) => {
	const [assetsList, setAssetsList] = useState<assetsProps[]>([]);
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllAssets()
			.then((res) => {
				setAssetsList(res.data);
				toast.success("Success getting users");
				setIsReloadNeeded(true);
				console.log(res.data);
			})
			.catch((e) => {
				toast.error("Error getting users");
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
			<h2 className="flex flex-row w-full justify-center items-center text-3xl my-14">
				All users
			</h2>
			<div className="flex flex-row flex-wrap gap-[50px] my-14 px-9 items-center justify-center">
				{isReloadNeeded &&
					assetsList.map((assets: any) => {
						return (
							<div>
								<AllAssetsCards assetsList={assets} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
