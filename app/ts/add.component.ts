import {Component} from '@angular/core';
import {AccountsResponsibility} from './accounts.responsibility';

@Component({
    selector: 'add-window',
    template: `<h1>abc</h1>`
})

export class AddComponent{
    accountsResponsibilityTraits: AccountsResponsibility;

    constructor(){this.accountsResponsibilityTraits = new AccountsResponsibility(1 , "aa" , "asdasd" , 123, 1234 ,  3242 , "etc");}
}