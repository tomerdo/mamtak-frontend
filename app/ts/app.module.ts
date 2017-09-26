import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import {BankResponsibilityComponent} from './bank-responsibility.component';
import {HttpModule} from "@angular/http";


@NgModule({
  imports:      [ BrowserModule , HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent , BankResponsibilityComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }