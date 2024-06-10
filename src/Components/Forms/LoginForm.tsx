"use client";
import { loginApi } from "@/Services/auth";
import { LoginProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import toast from "react-hot-toast";

const LoginForm = () => {
	const { push } = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginProps>();

	const onSubmit: SubmitHandler<LoginProps> = (data) => {
		try {
			loginApi(data).then((res: any) => {
				if (res.status === 200) {
					window.sessionStorage.setItem(
						"token",
						res.data.access_token
					);
					toast.success("Login successful !");
					push("/home");
				}
			});
		} catch (e) {
			toast.error("Login error !")
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
					Log in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>

					<p className="mt-10 text-center text-sm text-white">
						Don't have an account ?
						<button
							onClick={() => {
								push("/register");
							}}
							className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Register
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
