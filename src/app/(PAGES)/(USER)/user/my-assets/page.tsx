"use client";
import MyAssetsCards from "@/Components/Cards/MyAssetsCards";
import { getMyAssets } from "@/Services/user";
import { assetsProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = (assetsProps: assetsProps) => {
	const [assetsList, setAssetsList] = useState<assetsProps[]>();
	const [isReloadNeeded, setIsReloadNeeded] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		getMyAssets().then((res) => {
			setAssetsList(res.data);
			console.log(res.data);
		});
	}, [isReloadNeeded]);

	return (
		<div>
			<div className="flex flex-row flex-wrap gap-[50px] px-9 items-center justify-center">
				return (
				<div>
					<MyAssetsCards
						firstName={assetsProps.firstName}
						lastName={assetsProps.lastName}
						pseudo={assetsProps.pseudo}
						dollarAvailables={assetsProps.dollarAvailables}
						UserHasCrypto={assetsProps.UserHasCrypto.name}
					/>
				</div>
				);
			</div>
		</div>
	);
};

export default page;
