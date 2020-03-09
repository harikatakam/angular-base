import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-kyc-approval",
  templateUrl: "./kyc-approval.component.html",
  styleUrls: ["./kyc-approval.component.scss"]
})
export class KYCApprovalComponent implements OnInit {
  UserInfo: any;
  constructor(public userSrvc: UserService) {

  }

  UserId: any;

  ngOnInit(): void {
    this.GetUserData();
  }

  GetUserData() {
    this.userSrvc.GetUserDetailsById(this.UserId).subscribe((val: any) => {
      this.UserInfo = val;
    });
  }
}
