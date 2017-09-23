import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BankResponsibilityComponent} from './BankResponsibility.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , BankResponsibilityComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }