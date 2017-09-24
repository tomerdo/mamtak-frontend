import { Injectable } from '@angular/core';
import {AccountsResponsibility} from './accounts-responsibility';
import { RESPONSIBILITIES } from './mock-responsibilities';

@Injectable()
export class AccountsResponsibilityService {
    getAccountsResponsibility(): Promise<AccountsResponsibility[]>{
        return Promise.resolve(RESPONSIBILITIES);
    }

}