import { Component, OnInit } from '@angular/core';
import { StocksService, IStock } from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<IStock>;
  symbols: Array<string>;

  constructor(private service: StocksService) { 
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols)
      .subscribe(s => this.stocks = s);
  }

}
