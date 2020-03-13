import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { UserService } from "src/app/Services/user.service";
import { MasterData } from "src/app/Services/masterdata.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { NodeService } from "./node.service";
import { TreeNode } from "primeng/api/treenode";
import { map } from "rxjs/operators";

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

  // data: TreeNode[];

  cols: any[];

  selectedNode;
  items;



  constructor(
    private userService: UserService,
    public masterData: MasterData,
    public dialog: MatDialog,
    private nodeService: NodeService
  ) {}
  ngOnInit() {
    this.getUsers();

    this.cols = [
      { field: "userName", header: "User Name" },
      { field: "name", header: "Name" },
      { field: "mailId", header: "Email" },
      { field: "mobile", header: "Mobile" }
    ];

    this.items = [
      { label: "Change Manager", icon: "pi pi-user-edit", command: (event) => this.changeManager(this.selectedNode.data) }
  ];
  }

  getUsers() {
    this.userService
      .getAllUsersCreatedByLoggedInUser()
      .pipe(
        map((user: any) => {
          user = user.map(u => {
            u.role = this.masterData.data.roles.find(
              s => s.id === u.roles[0]
            ).roleName;
            return { data: u, children : [{data : {
              userName: "hari",
              name: "hari",
              mailId: "hari",
              mobile: "hari",
            }}] };
          });

          return user;
        })
      )
      .toPromise()
      .then((users: any) => {
        this.users = users;
        this.activeUsersCount = users.map(u => u.data).filter(u => u.isActive).length;
        this.inActiveUsersCount = users.map(u => u.data).length - this.activeUsersCount;
      });
    // .subscribe((users: any) => {
    //   this.users = users;
    //   this.activeUsersCount = users.filter(u => u.isActive).length;
    //   this.inActiveUsersCount = users.length - this.activeUsersCount;
    // });
  }

  changeActivation(user) {
    this.userService.setActiveStatus(user.id, !user.isActive).subscribe(() => {
      this.getUsers();
    });
  }

  changeManager(user) {
    this.managers = this.users.map(u => u.data).filter(
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

      this.userService.changeUserManager(user.id, result).subscribe(() => {
        this.getUsers();
      });
    });
  }
}
