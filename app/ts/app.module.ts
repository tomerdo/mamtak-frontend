import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BankResponsibilityComponent} from './bank-responsibility.component';
import {BlockScreenComponent} from "./block-screen.component";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , BankResponsibilityComponent, BlockScreenComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }