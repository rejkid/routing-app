import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { SecondContentComponent } from './second-content-list/second-content.component';
import { ProductRowComponent } from './product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FromNowPipe,
    SecondContentComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule, // JD Comment
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
