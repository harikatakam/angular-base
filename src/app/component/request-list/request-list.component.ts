import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
  gridOptions: any = [];
  rowData: any = [
    {
      id: 1,
      vehicletype: "Private Car",
      make: "Audi",
      Registration: "TS10U2G1234",
      View: ""
    },
    {
      id: 2,
      vehicletype: "Private Car",
      make: "BMW",
      Registration: "TS1PU000227",
      View: ""
    },
    {
      id: 3,
      vehicletype: "Private Car",
      make: "Honda",
      Registration: "TSWE1237899",
      View: ""
    }
  ];

  columnDefs: any = [
    { headerName: "Vehicle Type", field: "vehicletype" },
    { headerName: "Make/Model", field: "make" },
    { headerName: "Registration No", field: "Registration" },
    {
      headerName: "View",
      field: "View"
    }
  ];
  constructor(public router: Router) {}

  ngOnInit() {}

  NavigateToRequestPage(carID) {
    this.router.navigate(["request", carID]);
  }
}
