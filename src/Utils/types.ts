export type LoginProps = {
	email: string;
	password: string;
};

export type RegisterProps = {
	firstName: string;
	lastName: string;
	pseudo: string;
	city: string;
	email: string;
	password: string;
	promoCode: string;
};

export type AllCryptoProps = {
	id?: string;
	name: string;
	value: string;
	image: string;
	quantity: number;
	created_at?: string;
	updated_at?: string;
};
