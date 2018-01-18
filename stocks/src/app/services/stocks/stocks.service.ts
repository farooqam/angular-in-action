import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'MSFT'];
let service: string = 'http://angular2-in-action-api.herokuapp.com';

export interface IStock {
  symbol: string,
  lastTradePriceOnly: number,
  change: number,
  changeInPercent: number
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stock.splice(stocks.indexOf(stock, 1));
    return this.get();
  }

  load(symbols) {
    if(symbols){
      return this.http.get<Array<IStock>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
