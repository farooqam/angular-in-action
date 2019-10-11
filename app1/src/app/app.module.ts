import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderProcessorComponent,
    PriceQuoterComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
