import React from "react";

export const ErrorMsg = (errorName: { error: string }) => {
	return (
		<p className="text-red-500 text-lg italic">
			The field {errorName.error} is required
		</p>
	);
};
