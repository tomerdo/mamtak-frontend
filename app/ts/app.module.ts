import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BankResponsibilityComponent} from './bank-responsibility.component';
import {AddComponent} from './add.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , BankResponsibilityComponent, AddComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }