import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { UserService } from "src/app/Services/user.service";
import { MasterData } from "src/app/Services/masterdata.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"]
})
export class UserManagementComponent implements OnInit {
  users;
  managers;
  dialogRef;
  @ViewChild("managerAssignDialog") managerAssignDialog;
  activeUsersCount;
  inActiveUsersCount;

  constructor(
    private userService: UserService,
    public masterData: MasterData,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getAllUsersCreatedByLoggedInUser()
      .subscribe((users: any) => {
        this.users = users.map(u => {
          u.role = this.masterData.data.roles.find(
            s => s.id === u.roles[0]
          ).roleName;
          return u;
        });
        this.activeUsersCount = users.filter(u => u.isActive).length;
        this.inActiveUsersCount = users.length - this.activeUsersCount;
      });
  }

  changeActivation(user) {
    this.userService
      .setActiveStatus(user.id, !user.isActive)
      .subscribe(() => {
        this.getUsers();
      });
  }

  changeManager(user) {
    this.managers = this.users.filter(
      u => u.roles[0] !== 5 && u.id !== user.id
    );
    this.dialogRef = this.dialog.open(this.managerAssignDialog, {
      height: "250px",
      width: "350px"
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.userService.changeUserManager(user.id, result).subscribe(()=> {
        this.getUsers();
      });
    });
  }
}
