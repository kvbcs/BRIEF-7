import { AllCryptoProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { CreateCryptoForm } from "../Forms/CreateCryptoForm";
import { IoMdAddCircle } from "react-icons/io";

export type ModalCreateProps = {
	cryptoProps?: AllCryptoProps;
	isLoading?: any;
};
export const CreateCryptoModal = ({
	cryptoProps,
	isLoading,
}: ModalCreateProps) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 600,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			<button
				onClick={handleOpen}
				className="bg-[gold] text-center rounded-lg text-black w-fit flex flex-row justify-center gap-3 items-center p-4 text-2xl hover:bg-[#CAAD4F] mt-1"
			>
				<IoMdAddCircle />
				Create crypto
			</button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div>
						<span
							className="absolute right-10 top-10 cursor-pointer"
							onClick={handleClose}
						></span>
						<CreateCryptoForm
							cryptoProps={cryptoProps}
							isLoading={isLoading}
							handleClose={handleClose}
						/>
					</div>
				</Box>
			</Modal>
		</div>
	);
};
