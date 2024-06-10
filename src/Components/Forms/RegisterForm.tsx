"use client";
import { registerApi } from "@/Services/auth";
import { RegisterProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";

const RegisterForm = () => {
	const { push } = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterProps>();

	const onSubmit: SubmitHandler<RegisterProps> = (data) => {
		try {
			registerApi(data).then((res) => {
				if (res.status === 201) {
					window.sessionStorage.setItem(
						"token",
						res.data.access_token
					);
					push("/");
				}
			});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					className="mx-auto h-10 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
					Register
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-medium leading-6 text-white"
						>
							First Name
						</label>
						<div className="mt-2">
							<input
								id="firstName"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("firstName", { required: true })}
							/>
							{errors.firstName && (
								<ErrorMsg error={"firstName"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-medium leading-6 text-white"
						>
							Last Name
						</label>
						<div className="mt-2">
							<input
								id="lastName"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("lastName", { required: true })}
							/>
							{errors.lastName && (
								<ErrorMsg error={"Last Name"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-white"
						>
							Username
						</label>
						<div className="mt-2">
							<input
								id="username"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("pseudo", { required: true })}
							/>
							{errors.pseudo && <ErrorMsg error={"Username"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="city"
							className="block text-sm font-medium leading-6 text-white"
						>
							City
						</label>
						<div className="mt-2">
							<input
								id="city"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("city", { required: true })}
							/>
							{errors.city && <ErrorMsg error={"City"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-white"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								type="email"
								autoComplete="email"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("email", { required: true })}
							/>
							{errors.email && <ErrorMsg error={"Email"} />}
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-white"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								type="password"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("password", {
									required: true,
								})}
							/>
							{errors.password && <ErrorMsg error={"Password"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="promo"
							className="block text-sm font-medium leading-6 text-white"
						>
							Promo Code
						</label>
						<div className="mt-2">
							<input
								id="promo"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("pseudo", { required: true })}
							/>
							{errors.pseudo && <ErrorMsg error={"Promo Code"} />}
						</div>
					</div>
					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit & Log in"
						/>
					</div>

					<p className="mt-10 text-center text-sm text-white">
						Already a member ?
						<button
							onClick={() => {
								push("/home");
							}}
							className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Log in
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
