import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AddComponent } from './add/add.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    CalculatorComponent,
    AddComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
