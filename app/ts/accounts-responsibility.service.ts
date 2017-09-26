import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import {AccountsResponsibility} from './accounts-responsibility';
import { RESPONSIBILITIES } from './mock-responsibilities';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountsResponsibilityService {
  private responsibilitiesUrl = 'api/accounts/all'
  private localApiData = 'app/apidata/respos.json'

  constructor(private http: Http){
      
  }

  getAccountsResponsibility(): Promise<AccountsResponsibility[]>{
    return Promise.resolve(RESPONSIBILITIES);
  }

  getAccountsResponsibilityFromHttp()
  {
    return this.http.get(this.localApiData).map(response => response.json());
  }

  getAccountsResponsibilitySlowly(): Promise<AccountsResponsibility[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAccountsResponsibility()), 2000);
    });
  }

}