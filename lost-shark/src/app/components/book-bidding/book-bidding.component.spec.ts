import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBiddingComponent } from './book-bidding.component';

describe('BookBiddingComponent', () => {
  let component: BookBiddingComponent;
  let fixture: ComponentFixture<BookBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBiddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
