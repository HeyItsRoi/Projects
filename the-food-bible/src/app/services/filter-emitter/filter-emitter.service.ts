import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FilterEmitterService
{
	@Output() search: EventEmitter<any> = new EventEmitter();

	constructor() { }

	searchRestaurant(query: string): void
	{
		this.search.emit(query);
	}
}
