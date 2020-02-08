import { Component } from "@angular/core";
//import { LoggingService } from "../shared/logging.service";
import { AccountService } from "../shared/account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
  //  private loggingService: LoggingService,
    private accService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChanged(accountStatus);
  }
}
