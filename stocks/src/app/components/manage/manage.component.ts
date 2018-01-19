import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) { 
    this.symbols = service.get();  
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

  ngOnInit() {
  }

}
