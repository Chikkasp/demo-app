import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConverterPipe } from './pipes/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
