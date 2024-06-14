"use client";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import Header from "@/Components/Header";
import { getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = (assets: assetsProps) => {
	const [assetsList, setAssetsList] = useState<assetsProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getMyAssets()
			.then((res) => {
				setAssetsList(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e.stack);
			});
	}, [isReloadNeeded]);

	return (
		<div>
			<Header />
			<div className="flex flex-row flex-wrap gap-[50px] px-9 items-center justify-center">
				{assetsList &&
					assetsList?.map((assets) => {
						return (
							<div key={assets.pseudo}>
								<MyAssetsCards assets={assets} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
