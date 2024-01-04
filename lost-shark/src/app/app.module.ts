import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { NavbarComponent } from './common/components/navbar/navbar.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { BookBiddingComponent } from './components/book-bidding/book-bidding.component';

@NgModule({
	declarations: [
		AppComponent,

		// Common Components
		NavbarComponent,
		SidebarComponent,

		// General Components
  		BookBiddingComponent
	],
	imports: [
		// Material Components
		MatToolbarModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,

		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
