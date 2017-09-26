import {Component , OnInit} from '@angular/core';
import {Config} from './config.service';
import {AccountsResponsibility} from './accounts-responsibility';
import {Router} from '@angular/router';
import { AccountsResponsibilityService } from './accounts-responsibility.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    providers: [AccountsResponsibilityService],
})

export class AppComponent  implements OnInit{
    mainHeading = Config.MAIN_HEADING;
    responsibilityAreas: AccountsResponsibility[];
  
    constructor(private accountsResponsibilityService: AccountsResponsibilityService){
    }

    getResponsibilities(): void {
        this.accountsResponsibilityService.getAccountsResponsibility().then(r => this.responsibilityAreas = r);
    }

    ngOnInit(): void {
        this.getResponsibilities();
    }
}
