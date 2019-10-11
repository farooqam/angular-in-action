import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models/quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent {
  @Output() latestQuote = new EventEmitter<Quote>();

  quote: Quote;

  constructor() {
    interval(2000)
      .subscribe( quote => {
        this.quote = {
          stockSymbol: 'MSFT',
          lastPrice: 100 * Math.random()
        };

        this.latestQuote.emit(this.quote);
      });
  }
}
