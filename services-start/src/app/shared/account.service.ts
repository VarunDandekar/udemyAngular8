import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService:LoggingService){}

  addAccount(name:string, status:string){
    this.accounts.push({name,status});
    this.loggingService.logStatusChanged(status);
  }

  updateAccount(id:number, status:string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);
  }
}