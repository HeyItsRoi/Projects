import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookBiddingComponent } from 'src/app/components/book-bidding/book-bidding.component';

type MenuItem =
{
	name:string,
	icon?:string,
	link?:string,
	action?:string,
}

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	items: MenuItem[] = [];

	is_collapsed = false;

	constructor(
		private element:ElementRef,
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {
		this.toggleCollapse(true);
	}

	toggleCollapse(v?:boolean)
	{
		if(v == null)
			v = !this.is_collapsed;

		this.is_collapsed = v;

		if(this.is_collapsed)
		{
			this.element.nativeElement.classList.add("collapsed");
		}
		else
		{
			this.element.nativeElement.classList.remove("collapsed");
		}

		localStorage.setItem("sidebar.collapse", (v ? "true" : "false"));
	}

	toggleJewSheet()
	{
		this.dialog.open(BookBiddingComponent);
	}

}
