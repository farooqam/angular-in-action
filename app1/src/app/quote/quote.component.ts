import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  quote: Quote;

  handleLatestQuote(event): void {
    this.quote = event;
  }
}
