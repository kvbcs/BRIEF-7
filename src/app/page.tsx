import HomeHeader from "@/Components/HomeHeader";
import React from "react";

const page = () => {
	return (
		<div className="-mb-[15vh]">
			<HomeHeader />
			<img className="h-[90vh] w-full" src="wp2.jpeg" alt="" />
			<div className="absolute top-[450px] left-[50px] w-[450px] text-justify flex flex-col gap-6">
				<h1 className="text-[#AE9159] text-4xl">
					Welcome to Crypto $hop !
				</h1>
				<p className="text-2xl">
					Crypto $hop is a crypto exchange website, you can buy
					crypto, make offers and trade with other users.
				</p>
				<p className="text-2xl">Register now !</p>
			</div>
		</div>
	);
};

export default page;
