import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstValue: number;
  secondValue: number;
  result: number;

  handleFirstValueChanged(value: number): void {
    this.firstValue = value;
  }

  handleSecondValueChanged(value: number): void {
    this.secondValue = value;
  }

  handleButtonClicked(result: number): void {
    this.result = result;
  }
}
