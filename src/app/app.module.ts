import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppartmentListingComponent } from './appartment-listing/appartment-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppartmentListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
