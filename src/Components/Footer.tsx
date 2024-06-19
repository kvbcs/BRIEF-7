import React from "react";

const Footer = () => {
	return (
		<footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40]">
			<div className="relative z-[1] container m-auto px-6 md:px-12">
				<div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
					<div className="flex flex-wrap items-center justify-between md:flex-nowrap">
						<div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
							<ul className="list-disc list-inside space-y-8">
								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										Home
									</a>
								</li>

								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										Guide
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										Blocks
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										Contact
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-sky-400 transition"
									>
										Terms of Use
									</a>
								</li>
							</ul>
						</div>
						<div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
							<span className="flex justify-between text-white">
								<a href="#" className="font-semibold">
									Terms of Use{" "}
								</a>
								<a href="#" className="font-semibold">
									{" "}
									Privacy Policy
								</a>
							</span>

							<span className="block text-gray-300">
								Need help?{" "}
								<a
									href="#"
									className="font-semibold text-white"
								>
									{" "}
									Contact Us
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="absolute h-full inset-0 flex items-center"
			>
				<div
					aria-hidden="true"
					className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
				></div>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
			></div>
		</footer>
	);
};

export default Footer;
