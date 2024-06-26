import { AllTradeProps } from "@/Utils/types";
import axios from "axios";

// All Trades --------------------------------------------------------------------------------------------------------------------
export async function getAllTrade() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}trade/all`;

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
			console.log("Error getting all trades", e);
			throw new Error(e);
		});
}
