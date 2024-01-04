import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterEmitterService } from 'src/app/services/filter-emitter/filter-emitter.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{

	query: string = '';
	toggle_search: boolean = false;

	@ViewChild('searchbar') searchbar: ElementRef;

	constructor(
		private sidebar: SidebarService,
		private emitter: FilterEmitterService
	) { }

	ngOnInit(): void
	{

	}

	toggleSidebar(): void
	{
		this.sidebar.toggle();
	}

	toggleSearch(open: boolean): void
	{
		if (open) {
			this.toggle_search = true;
			this.searchbar.nativeElement.focus();
			return;
		}

		this.query = '';
		this.toggle_search = false;
		this.search();
	}

	search(): void
	{
		this.emitter.searchRestaurant(this.query);
	}

}
