import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RequestService {
  VehicleTypes: any = [{ Id: 1, Type: "Private Car" }];

  CaseTypes: any = [
    { Id: 1, Type: "Toyota 4Runner" },
    { Id: 2, Type: "RollOver" }
  ];

  PolicyTypes: any = [
    { Id: 1, Type: "Comprehensive" },
    { Id: 2, Type: "Liability" },
    { Id: 3, Type: "Collision" }
  ];

  Makes: any = [
    { Id: 1, Type: "Audi" },
    { Id: 2, Type: "BMW" },
    { Id: 3, Type: "Honda" }
  ];

  FuelTypes: any = [
    { Id: 1, Type: "Gasoline" },
    { Id: 2, Type: "Diesel" },
    { Id: 3, Type: "Ethanol" }
  ];

  Variants: any = [
    { Id: 1, Type: "Audi A7" },
    { Id: 2, Type: "BMW X4" },
    { Id: 3, Type: "Honda Civic" }
  ];

  RTOCities: any = [{ Id: 1, Type: "Hyderabad" }];

  PreviousInsurer: any = [
    { Id: 1, Name: "Samaira" },
    { Id: 2, Name: "Anika" }
  ];

  Discounts: any = [];

  PrefferedInsurers: any = [
    { Id: 1, Name: "Tanya" },
    { Id: 2, Name: "Rohan" }
  ];

  RequiredAdds: any = [];

  GetVehicles() {
    return this.VehicleTypes;
  }

  GetCaseTypes() {
    return this.CaseTypes;
  }

  GetPoliciess() {
    return this.PolicyTypes;
  }

  GetMakes() {
    return this.Makes;
  }

  GetFuelTypes() {
    return this.FuelTypes;
  }

  GetRTOCities() {
    return this.RTOCities;
  }

  GetVehicleVariants() {
    return this.Variants;
  }

  GetPreviousInsuranceNames() {
    return this.PreviousInsurer;
  }

  GetDiscounts() {
    return this.Discounts;
  }

  GetPrefferedInsuranceNames() {
    return this.PrefferedInsurers;
  }

  GetRequiredAdds() {
    return this.RequiredAdds;
  }
}
