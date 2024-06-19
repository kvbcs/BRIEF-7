"use client";

import { AllCryptoProps, CreateUpdateOfferProps } from "@/Utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import toast from "react-hot-toast";
import { createOffer } from "@/Services/offer";

export type InsertOfferProps = {
	id: string;

	handleClose: any;
};
export const CreateOfferForm = ({
	id,

	handleClose,
}: InsertOfferProps) => {
	const [IsReloadNeeded, setIsReloadNeeded] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CreateUpdateOfferProps>();

	const onSubmit: SubmitHandler<CreateUpdateOfferProps> = (
		data: CreateUpdateOfferProps
	) =>
		createOffer(data)
			.then((res) => {
				console.log(res);
				setIsReloadNeeded(true);
				toast.success("Success");
				handleClose();
			})
			.catch((e) => {
				toast.error("Insufficient tokens");
				console.log(e);
			});

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Create an offer
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="id_crypto"
							className="block text-sm font-medium leading-6 text-black"
						>
							Id Crypto
						</label>
						<div className="mt-2">
							<input
								value={id}
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("id_crypto", { required: true })}
							/>
							{errors.id_crypto && (
								<ErrorMsg content={"required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="amount"
							className="block text-sm font-medium leading-6 text-black"
						>
							Amount
						</label>
						<div className="mt-2">
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("amount", { required: true })}
							/>
							{errors.amount && <ErrorMsg content={"required"} />}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Create offer"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
