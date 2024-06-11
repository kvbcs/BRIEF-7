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
	age: number;
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

export type AllPromoProps = {
	id?: string;
	name: string;
	value: number;
};

export type AllOfferProps = {
	amount: number;
	created_at?: string;
	id_user?: string;
	Crypto: AllCryptoProps;
};

export type ErrorMsgProps = {
	content?: any;
};
