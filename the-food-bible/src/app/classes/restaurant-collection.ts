import { clone } from "../functions/clone";
import { Restaurant } from "./restaurants";

export class RestaurantCollection
{
	data: Restaurant[];
	restaurants: Restaurant[] = [];

	constructor(data: Restaurant[])
	{
		this.data = data;
		this.restaurants = this.data;
	}

	search(value: string)
	{
		if (value == '') {
			this.restaurants = this.data;
			return;
		}

		let data = clone(this.data);
		this.restaurants = data.filter(s =>
			s.name.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()) ||
			s.cuisine.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()) ||
			s.location.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())
		);
	}

}