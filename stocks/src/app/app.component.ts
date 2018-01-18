import { Component } from '@angular/core';
import { StocksService, IStock } from './services/stocks/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<IStock>;

  constructor(service: StocksService){
    service.load(['AAPL'])
      .subscribe(s => {
        this.stocks = s;
        console.log(this.stocks);
      });

      
  }
}
