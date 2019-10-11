import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderProcessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
