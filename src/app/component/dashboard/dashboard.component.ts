import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsersCreatedByLoggedInUser().subscribe(users => {
      this.rowData = users;
    });
  }
}
