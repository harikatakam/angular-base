import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  columnDefs = [
    { headerName: "Name", field: "Name", width: 500 },
    { headerName: "Email", field: "Email", width: 500  },
    { headerName: "Phone No", field: "PhoneNo", width: 500  }
  ];

  rowData = [
    { Name: "Anusha", Email: "anusha@gmail.com", PhoneNo: 9876543213 },
    { Name: "Shreya", Email: "Shreya@gmail.com", PhoneNo: 9643765335 },
    { Name: "Aishwarya", Email: "aishu@gmail.com", PhoneNo: 3242434333 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
