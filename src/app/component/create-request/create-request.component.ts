import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/Services/request.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-create-request",
  templateUrl: "./create-request.component.html",
  styleUrls: ["./create-request.component.scss"]
})
export class CreatRequestComponent implements OnInit {
  Vehicles: any = [];

  CaseTypes: any = [];

  PolicyTypes: any = [];

  MakesNModels: any = [];

  FuelTypes: any = [];

  Variants: any = [];

  RTOCities: any = [];

  PreviousInsurer: any = [];

  Discounts: any = [];

  PrefferedInsurers: any = [];

  RequiredAdds: any = [];

  RequestForm: FormGroup;

  constructor(public requestSrvc: RequestService, public fb: FormBuilder) {}
  ngOnInit() {
    this.CreateRequestForm();
    this.Vehicles = this.requestSrvc.GetVehicles();
    this.CaseTypes = this.requestSrvc.GetCaseTypes();
    this.PolicyTypes = this.requestSrvc.GetPoliciess();
    this.MakesNModels = this.requestSrvc.GetMakes();
    this.FuelTypes = this.requestSrvc.GetFuelTypes();
    this.RTOCities = this.requestSrvc.GetRTOCities();
    this.Variants = this.requestSrvc.GetVehicleVariants();
    this.PreviousInsurer = this.requestSrvc.GetPreviousInsuranceNames();
    this.Discounts = this.requestSrvc.GetDiscounts();
    this.PrefferedInsurers = this.requestSrvc.GetPrefferedInsuranceNames();
    this.RequiredAdds = this.requestSrvc.GetRequiredAdds();
  }

  CreateRequestForm() {
    this.RequestForm = this.fb.group({
      requestTpye: ["request"],
      vehicleType: ["-1"],
      caseType: ["-1"],
      policyType: ["-1"],
      regNo: [""],
      make: ["-1"],
      fuelType: ["-1"],
      variant: ["-1"],
      regDate: [""],
      mDate: [""],
      rto: ["-1"],

      PrevInsurer: ["-1"],
      IDV: [""],
      addOns: ["-1"],
      comments: [""],

      PreffInsurer: ["-1"],
      EDate: [""],
      clainTaken: ["yes"],
      NCBDiscount: ["-1"]
    });
  }

  SaveData() {
    console.log(this.RequestForm.value);
  }
}
