import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearComponent } from './exercise3/year/year.component';
import { CanadaPhoneDirective } from './exercise1/canada-phone.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercise3Component,
    Exercise1Component,
    YearComponent,
    CanadaPhoneDirective
  ],
  exports: [
    CanadaPhoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
