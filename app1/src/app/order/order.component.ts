import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  stockSymbol: string;
  quantity: number;

  onStockSymbolChanged({target}): void {
    this.stockSymbol = target.value;
  }

  onQuantityChanged({target}): void {
    this.quantity = target.value;
  }
}
