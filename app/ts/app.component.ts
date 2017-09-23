import {Component} from '@angular/core';
import {Config} from './config.service';
import {AccountsResponsibility} from './AccountsResponsibility';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    responsibilityAreas: AccountsResponsibility[];

    constructor(){
        this.responsibilityAreas = [
            new AccountsResponsibility(1 , "Tel Aviv North" , "Yotam" , 22 , 28, 5360 , "etc..") ,
            new AccountsResponsibility(2 , "Tel Aviv South" , "Dvir" , 18 , 21, 5361 , "etc..")
            ];
    }
}
