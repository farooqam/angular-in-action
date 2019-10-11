import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Output() valueChanged = new EventEmitter<number>();

  handleValueChanged({target}): void {
    this.valueChanged.emit(target.value);
  }

}
