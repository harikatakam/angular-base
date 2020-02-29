import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../Services/user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  UserForm: FormGroup;

  IsFormSubmitted = false;
  roles: any = [];

  constructor(public fb: FormBuilder, private userService: UserService) {
    this.CreateBankForm();
  }

  ngOnInit(): void {
    this.userService
      .getUserRoles()
      .subscribe(
        (roles: any) =>
          (this.roles = roles.filter(
            r => r.id > this.userService.loggedInUser.roles.$values[0]
          ))
      );
  }

  CreateBankForm() {
    this.UserForm = this.fb.group({
      name: ["", Validators.required],
      userName: ["", Validators.required],
      mailId: ["", Validators.email],
      mobile: ["", Validators.required],
      roles: [""],
      CreatedBy: [""],
      AcNo: ["", Validators.required],
      Name: [""],
      IFSC: ["", Validators.required],
      DocumentType: ["", Validators.required],
      PanNo: ["", Validators.required],
      PanName: [""],
      AadharNo: ["", Validators.required],
      AadharName: [""]
    });
  }

  save() {
    if (this.UserForm.valid) {
    } else {
      this.IsFormSubmitted = true;
    }
    console.log(this.UserForm.value);
  }
}
