"use client";

import { AllCryptoProps, CreateUpdateCryptoProps } from "@/Utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import { postCreateCrypto } from "@/Services/crypto";

export const CreateCryptoForm = ({}: CreateUpdateCryptoProps) => {
	const [cryptoList, setCryptoList] = useState<AllCryptoProps[]>();
	const [IsReloadNeeded, setIsReloadNeeded] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CreateUpdateCryptoProps>();

	const onSubmit: SubmitHandler<CreateUpdateCryptoProps> = (data) =>
		postCreateCrypto(data)
			.then((res) => {
				setIsReloadNeeded(true);
				// handleClose();
			})
			.catch((e) => console.log(e));

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Insert new animal
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Animal name
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("name", { required: true })}
							/>
							{errors.name && <ErrorMsg content={"name"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Animal image
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("image", { required: true })}
							/>
							{errors.image && <ErrorMsg content={"image"} />}

							<div>
								<p>Preview</p>
								{/* <img
                            src={image || animalProps?.image}
                            className="w-32 h-32 object-cover"
                        /> */}
							</div>
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Insert animal"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
