export class AccountsResponsibility{

    id:number;
    accountsArea:string;
    adminName:string;
    minCreditValue:number;
    maxCreditValue:number;
    moneyChannel:number;
    otherNotes:string;

    constructor(id:number, accountsArea:string, adminName:string, minCreditValue:number, maxCreditValue:number, moneyChannel:number, otherNotes:string )
    {
        this.id = id;
        this.accountsArea = accountsArea;
        this.adminName = adminName;
        this.minCreditValue = minCreditValue;
        this.maxCreditValue = maxCreditValue;
        this.moneyChannel = moneyChannel;
        this.otherNotes = otherNotes;
    }

}