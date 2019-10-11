import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() firstValue: number;

  @Input() secondValue: number;

  @Output() buttonClicked = new EventEmitter<number>();

  handleClick($event: any): void {
    this.buttonClicked.emit(+this.firstValue + +this.secondValue);
  }
}
