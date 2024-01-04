import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class SidebarService
{
	private is_open = true;
	private on_open : BehaviorSubject<boolean>;

	constructor()
	{
		this.on_open = new BehaviorSubject(this.is_open);
	}

	get isOpen$():Observable<boolean>
	{
		return this.on_open.asObservable();
	}

	toggle(v?:boolean):boolean
	{
		if(v == null)
			v = !this.is_open;

		this.is_open = v;
		this.on_open.next(v);

		return v;
	}
}