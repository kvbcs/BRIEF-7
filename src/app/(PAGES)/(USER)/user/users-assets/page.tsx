"use client";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import Header from "@/Components/Header";
import { getAllAssets, getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = (assets: assetsProps) => {
	const [assetsList, setAssetsList] = useState<assetsProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getAllAssets()
			.then((res) => {
				setAssetsList(res.data);
				toast.success("Success getting users");
				console.log(res.data);
			})
			.catch((e) => {
				toast.error("Error getting users");
				console.log(e.stack);
			});
	}, [isReloadNeeded]);

	return (
		<div>
			<Header />
			<h2 className="text-center">All users</h2>
			<div className="flex flex-row flex-wrap gap-[50px] my-14 px-9 items-center justify-center">
				{assetsList &&
					assetsList?.map((assets) => {
						return (
							<div key={assets.UserHasCrypto.id}>
								<MyAssetsCards assets={assets} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
