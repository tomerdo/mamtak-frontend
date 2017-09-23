import {Component , Input} from '@angular/core';
import {AccountsResponsibility} from './AccountsResponsibility';


@Component({
    selector: 'bank-table',
    templateUrl: 'app/ts/BankResponsibility.component.html',
})

export class BankResponsibilityComponent{
     @Input() responsibilityAreas: AccountsResponsibility[] = [];
}