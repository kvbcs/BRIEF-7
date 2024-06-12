//Auth Types ----------------------------------------------------------------------------------------------------------------
export type AuthProps = {
	firstName?: string;
	lastName?: string;
	pseudo?: string;
	city?: string;
	email: string;
	password: string;
	promoCode?: string;
	age?: number;
};

//Role Types ----------------------------------------------------------------------------------------------------------------
export type AllRoleProps = {
	id?: string;
	name: string;
};

//Promo Types ----------------------------------------------------------------------------------------------------------------
export type AllPromoProps = {
	id?: string;
	name: string;
	value: number;
};

export type CreateUpdatePromoProps = {
	name: string;
	value: number;
};

//Crypto Types ----------------------------------------------------------------------------------------------------------------
export type AllCryptoProps = {
	id?: string;
	name: string;
	value?: string;
	image?: string;
	quantity?: number;
	created_at?: string;
	updated_at?: string;
};

export type CreateUpdateCryptoProps = {
	id?: string;
	name: string;
	value: number;
	quantity: number;
	image: string;
};

export type BuyCryptoProps = {
	id_crypto: string;
	amount: number;
};

//Trade Types ----------------------------------------------------------------------------------------------------------------

export type GiverReceiverProps = {
	firstName: string;
	lastName: string;
	pseudo: string;
	dollarAvailables: number;
};

export type AllTradeProps = {
	Giver: GiverReceiverProps;
	Receiver: GiverReceiverProps;
	Crypto: AllCryptoProps;
};

export type CreateTradeProps = {
	id_offer: string;
};

//Offer Types ----------------------------------------------------------------------------------------------------------------
export type AllOfferProps = {
	amount: number;
	created_at?: string;
	id_user?: string;
	Crypto: AllCryptoProps;
};

export type CreateUpdateOfferProps = {
	id_crypto: string;
	amount: number;
};

//User Types ----------------------------------------------------------------------------------------------------------------
export type assetsProps = {
	firstName: string;
	lastName: string;
	dollarAvailables: number;
	pseudo: string;
	UserHasCrypto: AllCryptoProps;
};

//Misc Types ----------------------------------------------------------------------------------------------------------------
export type ErrorMsgProps = {
	content?: any;
};
