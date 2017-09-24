import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import {BankResponsibilityComponent} from './bank-responsibility.component';
import {AddComponent} from './add.component';

const bankRoutes = new Routes([
    {path: 'add-admin', component: AddComponent}
]);

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , BankResponsibilityComponent, AddComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }