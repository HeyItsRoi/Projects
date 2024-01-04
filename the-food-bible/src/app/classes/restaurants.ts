export interface Restaurant
{
	name: string;
	location?: string;
	cuisine?: string;
	meal?: Meal;
	accept_card?: boolean;
	has_outdoor?: boolean;
	cost?: number;
	rating?: Rating;
	extra_notes?: string[];
}

export interface Meal
{
	breakfast?: boolean;
	lunch?: boolean;
	dinner?: boolean;
	dessert?: boolean;
}

export interface Rating
{
	sunny?: number;
	roi?: number;
	kishant?: number;
	ray?: number;
	kevin?: number;
}