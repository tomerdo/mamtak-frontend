import { Injectable } from '@angular/core';
import {AccountsResponsibility} from './accounts-responsibility';
import { RESPONSIBILITIES } from './mock-responsibilities';

@Injectable()
export class AccountsResponsibilityService {

    getAccountsResponsibility(): Promise<AccountsResponsibility[]>{
        return Promise.resolve(RESPONSIBILITIES);
    }

    getAccountsResponsibilitySlowly(): Promise<AccountsResponsibility[]> {
      return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getAccountsResponsibility()), 2000);
      });
    }

}