import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from './services/sidebar/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
	title = 'the-food-bible';

	@ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private sidebar: SidebarService) {}

	ngOnInit(): void
	{
		this.sidebar.isOpen$.subscribe(() => this.sidenav.toggle());
	}

}
