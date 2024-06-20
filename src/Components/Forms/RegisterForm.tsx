"use client";
import { registerApi } from "@/Services/auth";
import { RegisterProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/Utils/validator";

const RegisterForm = () => {
	const { push } = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterProps>({ mode: "all", resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<RegisterProps> = (data) => {
		try {
			registerApi(data).then((res) => {
				if (res.status === 201) {
					window.sessionStorage.setItem(
						"token",
						res.data.access_token
					);
					toast.success("Register successful !");
					push("/crypto/all");
				}
			});
		} catch (e) {
			toast.error("Register error !");
			console.log(e);
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
								{...register("firstName")}
							/>
							{errors.firstName && (
								<ErrorMsg content={errors.firstName?.message} />
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
								{...register("lastName")}
							/>

							{errors.lastName && (
								<ErrorMsg content={errors.lastName?.message} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="age"
							className="block text-sm font-medium leading-6 text-white"
						>
							Age
						</label>
						<div className="mt-2">
							<input
								id="age"
								type="number"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("age")}
							/>
							{errors.age && (
								<ErrorMsg content={errors.age?.message} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="pseudo"
							className="block text-sm font-medium leading-6 text-white"
						>
							Pseudo
						</label>
						<div className="mt-2">
							<input
								id="pseudo"
								type="text"
								className="block indent-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("pseudo")}
							/>

							{errors.pseudo && (
								<ErrorMsg content={errors.pseudo?.message} />
							)}
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
								{...register("city")}
							/>
							{errors.city && (
								<ErrorMsg content={errors.city?.message} />
							)}
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
								{...register("email")}
							/>

							{errors.email && (
								<ErrorMsg content={errors.email?.message} />
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
								{...register("password")}
							/>

							{errors.password && (
								<ErrorMsg content={errors.password?.message} />
							)}
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
								{...register("promoCode")}
							/>
							{errors.promoCode && (
								<ErrorMsg content={errors.promoCode?.message} />
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-[#caad4f] px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-[#7c6928] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit & Log in"
						/>
					</div>
				</form>
				<p className="mt-10 text-center text-sm text-white">
					Already a member ?
					<button
						type="button"
						onClick={() => {
							push("/login");
						}}
						className="mx-2 font-semibold leading-6 text-[#caad4f] hover:text-[#6e5e29]"
					>
						Log in
					</button>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;
