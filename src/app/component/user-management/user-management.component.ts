import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { of } from "rxjs";
import { UserService } from "src/app/Services/user.service";
import { MasterData } from "src/app/Services/masterdata.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"]
})
export class UserManagementComponent implements OnInit {
  users;

  constructor(
    private userService: UserService,
    public masterData: MasterData
  ) {}
  ngOnInit() {
    this.userService
      .getAllUsersCreatedByLoggedInUser()
      .subscribe((users: any) => {
        this.users = users.map(u => {
          u.role = this.masterData.data.roles.find(
            s => s.id === u.roles[0]
          ).roleName;
          return u;
        });
      });
  }

  changeActivation(user) {
    this.userService.setActiveStatus(user.id, !user.isActive).subscribe(()=> {

    });
  }

  changeManager(user) {
    // this.userService.changeUserManager(user.id, mangerId).subscribe(()=> {

    // });
  }
}
