"use client";
import { useRouter } from "next/navigation";
import React from "react";
import DisconnectButton from "./Buttons/DisconnectButton";
import { FaBitcoin, FaShoppingBasket, FaUser } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

const Header = () => {
	const { push } = useRouter();

	return (
		<header className="bg-black w-full h-[10vh] flex lg:flex-row items-center justify-between px-5 md:flex-col md:h-fit md:pb-4 md:gap-3 max-md:flex-col">
			<div className="h-[90%] w-[100px]">
				<img
					src="https://m.media-amazon.com/images/I/71cu980UfuL._AC_UF894,1000_QL80_.jpg"
					alt="logo"
					className="h-full w-full rounded-full"
				/>
			</div>
			<ul className="flex lg:flex-row gap-[75px] md:flex-col sm:flex-col sm:h-fit">
				<button
					className="flex flex-row gap-3 items-center justify-center"
					onClick={() => {
						push("/crypto/all");
					}}
				>
					<FaBitcoin />
					Crypto
				</button>
				<button
					className="flex flex-row gap-3 items-center justify-center"
					onClick={() => {
						push("/trade/all");
					}}
				>
					<GiTrade />
					Trade
				</button>
				<button
					className="flex flex-row gap-3 items-center justify-center"
					onClick={() => {
						push("/offer/all");
					}}
				>
					<MdLocalOffer />
					Offer
				</button>
				<button
					className="flex flex-row gap-3 items-center justify-center"
					onClick={() => {
						push("/user/my-assets");
					}}
				>
					<FaShoppingBasket />
					My Assets
				</button>
				<button
					className="flex flex-row gap-3 items-center justify-center"
					onClick={() => {
						push("/user/users-assets");
					}}
				>
					<FaUser />
					All Users
				</button>
			</ul>
			<DisconnectButton />
		</header>
	);
};

export default Header;
