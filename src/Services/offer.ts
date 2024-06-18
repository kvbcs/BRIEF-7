import { CreateUpdateOfferProps } from "@/Utils/types";
import axios from "axios";

export async function getAllOffer() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.get(url, axiosConfig)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

export async function buyOffer(id_offer: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.post(url, { id_offer: id_offer }, axiosConfig)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

export async function createOffer(data: CreateUpdateOfferProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.post(
			url,
			{
				id_crypto: String(data.id_crypto),
				amount: Number(data.amount),
			},
			axiosConfig
		)
		.then((res) => {
			console.log(res);

			return res;
		})
		.catch((e) => {
			console.log(e);
			throw new Error(e);
		});
}
