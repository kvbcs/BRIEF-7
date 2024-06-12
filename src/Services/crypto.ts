import {
	AllCryptoProps,
	BuyCryptoProps,
	CreateUpdateCryptoProps,
} from "@/Utils/types";
import axios from "axios";

// All Crypto --------------------------------------------------------------------------------------------------------------------
export async function getAllCrypto() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;

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
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// Search Crypto --------------------------------------------------------------------------------------------------------------------
export async function getSearchCrypto({ name }: AllCryptoProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;

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
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// History Crypto --------------------------------------------------------------------------------------------------------------------
export async function getHistoryCrypto({ id }: AllCryptoProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${id}`;

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
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// Create Crypto --------------------------------------------------------------------------------------------------------------------
export async function postCreateCrypto(
	createCryptoProps: CreateUpdateCryptoProps
) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.post(
			url,
			{
				name: createCryptoProps.name,
				value: createCryptoProps.value,
				quantity: createCryptoProps.quantity,
				image: createCryptoProps.image,
			},
			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// Buy Crypto --------------------------------------------------------------------------------------------------------------------
export async function postBuyCrypto(buyCryptoProps: BuyCryptoProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.post(
			url,
			{
				id_crypto: buyCryptoProps.id_crypto,
				amount: buyCryptoProps.amount,
			},
			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// Update Crypto --------------------------------------------------------------------------------------------------------------------
export async function patchUpdateCrypto(
	updateCryptoProps: CreateUpdateCryptoProps,
	id: CreateUpdateCryptoProps
) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/${id}`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.patch(
			url,
			{
				id: updateCryptoProps.id,
				name: updateCryptoProps.name,
				value: updateCryptoProps.value,
				quantity: updateCryptoProps.quantity,
				image: updateCryptoProps.image,
			},
			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

// Delete Crypto --------------------------------------------------------------------------------------------------------------------
export async function deleteCrypto(id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/delete/${id}`;

	let axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	};
	return axios
		.delete(
			url,

			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}
