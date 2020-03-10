import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-kyc-approval",
  templateUrl: "./kyc-approval.component.html",
  styleUrls: ["./kyc-approval.component.scss"]
})
export class KYCApprovalComponent implements OnInit {
  UserInfo: any;
  constructor(public userSrvc: UserService, public router: Router) {}

  users: any;

  ngOnInit(): void {
    this.GetUsersData();
  }

  GetUsersData() {
    this.userSrvc.getAllKycPendingUsers().subscribe(users => {
      this.users = users;
    });
  }

  viewUserDetails(user) {
    this.router.navigate(["approveKyc", user.id]);
  }
}
