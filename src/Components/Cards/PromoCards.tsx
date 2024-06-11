import React from "react";

const PromoCards = ({ crypto: crypto }: AllCryptoProps) => {
	return (
		<div className="flex flex-col justify-evenly items-center my-36 h-[40vh]">
			<div className="bg-sky-900 h-full w-fit px-14 flex flex-col items-center justify-evenly rounded-md">
				<p>name: {crypto.name}</p>
				<p>value: {crypto.value} $</p>
				<img
					className="h-[200px] w-[200px] rounded-xl"
					src={crypto.image}
					alt=""
				/>
				<p>quantity : {crypto.quantity}</p>
				<button className="bg-green-500 p-3 rounded-lg">Buy</button>
			</div>
		</div>
	);
};

export default PromoCards;
