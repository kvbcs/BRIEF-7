import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { CreateOfferForm } from "../Forms/CreateOfferForm";
import { MdLocalOffer } from "react-icons/md";

export type ModalOfferProps = {
	id: string;
	isLoading?: any;
};
export const CreateOfferModal = ({ id }: { id: string }) => {
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
				className="bg-[gold] text-center rounded-lg flex flex-row justify-center items-center gap-3 w-fit text-black p-4 text-sm mt-1"
			>
				<MdLocalOffer />
				Create offer
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
						<CreateOfferForm id={id} handleClose={handleClose} />
					</div>
				</Box>
			</Modal>
		</div>
	);
};
