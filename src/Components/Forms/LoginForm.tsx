"use client";
import { loginApi } from "@/Services/auth";
import { AuthProps } from "@/Utils/types";
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
	} = useForm<AuthProps>();

	const onSubmit: SubmitHandler<AuthProps> = (data) => {
		try {
			loginApi(data).then((res: any) => {
				if (res.status === 200) {
					window.sessionStorage.setItem(
						"token",
						res.data.access_token
					);
					toast.success("Login successful !");
					push("/crypto/all");
				}
			});
		} catch (e) {
			toast.error("Login error !");
			console.log(e);
		}
	};

	return (
		<div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
							{errors.email && (
								<ErrorMsg
									content={"This email field is required"}
								/>
							)}
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
							{errors.password && (
								<ErrorMsg
									content={"The password field is required"}
								/>
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-[#caad4f] px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>

					<p className="mt-10 text-center text-sm text-white">
						Don't have an account ?
						<button
							type="button"
							onClick={() => {
								push("/register");
							}}
							className="mx-2 font-semibold leading-6 text-[#caad4f] hover:text-[#7a6e29]"
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
