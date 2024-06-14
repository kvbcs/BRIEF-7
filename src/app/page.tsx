import HomeHeader from "@/Components/HomeHeader";
import React from "react";

const page = () => {
	return (
		<div>
			<HomeHeader />
			<img
				className="h-[90vh] w-full"
				src="wp.png" alt="" />
		</div>
	);
};

export default page;
