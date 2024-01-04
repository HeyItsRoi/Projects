import { Component, ViewEncapsulation } from '@angular/core';

type EngravingPrice =
{
	equity: Bid,
	ideal: Bid,
	idiot: Bid
}

type Bid =
{
	profit: number,
	bid: number,
	competitor_profit: number
}

@Component({
	selector: 'book-bidding',
	templateUrl: './book-bidding.component.html',
	styleUrls: ['./book-bidding.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BookBiddingComponent {
	price: EngravingPrice = {
		equity: {
			profit: 0,
			bid: 0,
			competitor_profit: 0
		},
		ideal: {
			profit: 0,
			bid: 0,
			competitor_profit: 0
		},
		idiot: {
			profit: 0,
			bid: 0,
			competitor_profit: 0
		}
	};

	party_size: number = 8; 

	calculateBid(event: any)
	{
		const current_price = event.target.value;

		this.price.equity.profit = Math.round(current_price / 1.05 / this.party_size);
		this.price.equity.bid = Math.floor(this.price.equity.profit * (this.party_size - 1));
		this.price.equity.competitor_profit = Math.round(this.price.equity.profit);

		this.price.ideal.bid = Math.floor(current_price /1.05/(1.1 + 1 / (this.party_size - 1))) + 1;
		this.price.ideal.profit = Math.round(current_price / 1.05 - this.price.ideal.bid);
		this.price.ideal.competitor_profit = Math.round(current_price / 1.05 - this.price.ideal.bid*1.1);

		this.price.idiot.bid = Math.ceil(this.price.ideal.bid * 1.04);
		this.price.idiot.profit = Math.round(current_price / 1.05 - this.price.idiot.bid);
		this.price.idiot.competitor_profit = Math.round(current_price/ 1.05 - this.price.idiot.bid * 1.1);
	}
}
