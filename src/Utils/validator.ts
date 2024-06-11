import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object({
	firstName: yup
		.string()
		.required("This field is required")
		.min(3, "Minimum 3 characters"),
	lastName: yup
		.string()
		.required("This field is required")
		.min(3, "Minimum 3 characters"),
	pseudo: yup
		.string()
		.required("This field is required")
		.min(3, "Minimum 3 characters"),
	city: yup
		.string()
		.required("This field is required")
		.min(3, "Minimum 3 characters"),
	email: yup
		.string()
		.required("This field is required")
		.email()
		.typeError("Email must be valid"),
	password: yup
		.string()
		.required("This field is required")
		.min(8, "Minimum 8 characters")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/[0-9]/, "Password must contain at least one number")
		.matches(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		),
	promoCode: yup
		.string()
		.required("This field is required")
		.min(3, "Minimum 3 characters"),
	age: yup
		.number()
		.required("This field is required")
		.negative("Age can't be negative")
		.integer("Age must be an integer")
		.min(18, "You must be 18 or older")
		.max(120, "You must be 120 or younger"),
});
