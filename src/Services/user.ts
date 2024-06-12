import { AllTradeProps } from "@/Utils/types";
import axios from "axios";

// All Trades --------------------------------------------------------------------------------------------------------------------
export async function getMyAssets() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.get(
			url,

			axiosConfig
		)
		.then((res) => {
			console.log(res.data);

			return res;
		})
		.catch((e) => {
			console.log("Error getting my assets", e);
			throw new Error(e);
		});
}
