import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";
import { MasterData } from "src/app/Services/masterdata.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  columnDefs = [
    { headerName: "User Name", field: "userName" },
    { headerName: "Email", field: "mailId" },
    { headerName: "Phone No", field: "mobile" },
    { headerName: "Role", field: "role" }
  ];

  gridOptions = {
    headerHeight: 40,
    rowHeight: 35
  };

  rowData;

  constructor(
    private userService: UserService,
    public masterData: MasterData
  ) {}

  ngOnInit(): void {
    this.userService
      .getAllUsersCreatedByLoggedInUser()
      .subscribe((users: any) => {
        this.rowData = users.map(u => {
          u.role = this.masterData.data.roles.find(
            s => s.id === u.roles[0]
          ).roleName;
          return u;
        });
      });
  }
}
