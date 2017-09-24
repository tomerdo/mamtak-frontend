import {Component , Input} from '@angular/core';
import {AccountsResponsibility} from './accounts-responsibility';


@Component({
    selector: 'bank-table',
    templateUrl: 'app/ts/bank-responsibility.component.html',
})

export class BankResponsibilityComponent{
     @Input() responsibilityAreas: AccountsResponsibility[] = [];
}