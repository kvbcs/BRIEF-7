import { postBuyCrypto, postCreateCrypto } from "@/Services/crypto";
import { AllCryptoProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const CreateCryptoModal = ({ crypto }: { crypto: AllCryptoProps }) => {
	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function HandleCryptoCreate(cryptoId: any) {
		postCreateCrypto(cryptoId)
			.then((res) => {
				toast.success("Crypto created !");
				handleClose();
			})
			.catch((e) => toast.error(e));
	}

	return (
		<div>
			<button
				onClick={handleOpen}
				className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
			>
				Create crypto
			</button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<label className="text-black" htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="text-black indent-3 border-2 border-black  w-full"
						placeholder="Enter a name..."
						required
					/>
					<label className="text-black" htmlFor="image">
						Image
					</label>
					<input
						type="url"
						id="image"
						name="image"
						className="text-black indent-3 border-2 border-black  w-full"
						placeholder="Enter a valid url..."
						required
					/>
					<label className="text-black" htmlFor="name">
						Quantity
					</label>
					<input
						type="number"
						id="quantity"
						name="quantity"
						className="text-black indent-3 border-2 border-black  w-full"
						placeholder="Enter a quantity..."
						required
					/>
					<label className="text-black" htmlFor="value">
						Value
					</label>
					<input
						type="number"
						id="value"
						name="value"
						className="text-black indent-3 border-2 border-black  w-full"
						placeholder="Enter a value..."
						required
					/>

					<div className="flex items-center">
						<button
							onClick={handleClose}
							className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
						>
							Cancel
						</button>
						<button
							className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
							onClick={() => {
								HandleCryptoCreate(crypto);
							}}
						>
							Confirm
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	);
};
