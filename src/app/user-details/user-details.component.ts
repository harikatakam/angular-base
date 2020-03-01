import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../Services/user.service";
import { AlertService } from "../Services/alert.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailsComponent implements OnInit {
  UserForm: FormGroup;

  IsFormSubmitted = false;
  roles: any = [];

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    public alert: AlertService
  ) {
    this.CreateBankForm(userService.loggedInUser);
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

  CreateBankForm(LoginData: any) {
    if (LoginData === null) {
      LoginData = {};
    }
    this.UserForm = this.fb.group({
      Id: [LoginData.Id],
      name: [LoginData.name],
      userName: [LoginData.UserName],
      mailId: [LoginData.MailId],
      mobile: [LoginData.Mobile],
      roles: [LoginData.roles.$values[0]],
      // CreatedBy: [LoginData.CreatedBy],
      AcNo: [""],
      Name: [""],
      IFSC: [""],
      aadhar: [""],
      Pan: [""]
    });
  }

  save() {
    if (this.UserForm.valid) {
      this.UpdateUser();
    } else {
      this.IsFormSubmitted = true;
    }
    console.log(this.UserForm.value);
  }

  UpdateUser() {
    let formdata: any = this.UserForm.getRawValue();
    delete formdata.AcNo;
    delete formdata.Name;
    delete formdata.IFSC;
    delete formdata.aadhar;
    delete formdata.Pan;
    formdata.roles = [formdata.roles];
    this.userService.updateUSer(formdata).subscribe((val: any) => {
      this.alert.SuccesMessageAlert("User Updated Succesfully", "Close");
    });
  }

  UploadFile(event) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files[0];
    console.log(event);
    // this.form.patchValue({
    //   avatar: file
    // });
    // this.form.get("avatar").updateValueAndValidity();
  }
}
