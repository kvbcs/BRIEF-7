"use client";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import Header from "@/Components/Header";
import { getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
		return <h1> chargement</h1>;
	}

	return (
		<div>
			<Header />
			<div className="flex flex-row flex-wrap gap-[50px] px-9 items-center justify-center">
				<MyAssetsCards assetsList={assetsList} />
			</div>
		</div>
	);
};

export default page;
