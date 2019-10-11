import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.css']
})
export class OrderProcessorComponent {
  private $stockSymbol: string;
  private $quantity: number;

  @Input() set stockSymbol(value: string) {
    if (value !== undefined) {
      this.$stockSymbol = value;
      console.log(`Set stock symbol to '${this.$stockSymbol}'.`);
    }
  }

  get stockSymbol(): string {
    return this.$stockSymbol;
  }

  @Input() set quantity(value: number) {
    if (value !== undefined) {
      this.$quantity = value;
      console.log(`Set stock quantity to '${this.$quantity}'.`);
    }
  }

  get quantity(): number {
    return this.$quantity;
  }
}
