import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { UserService } from "src/app/Services/user.service";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertService } from "src/app/Services/alert.service";

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && isSubmitted);
//   }

//   // isErrorState(
//   //   control: FormControl | null,
//   //   form: FormGroupDirective | NgForm | null
//   // ): boolean {
//   //   const isSubmitted = form && form.submitted;
//   //   return !!(control && control.invalid && (control.dirty || isSubmitted));
//   // }
// }

@Component({
  selector: "app-user-creation",
  templateUrl: "./user-creation.component.html",
  styleUrls: ["./user-creation.component.scss"]
})
export class UserCreationComponent implements OnInit {
  UserForm: FormGroup;
  IsFormSubmitted = false;
  Roles: any = [];
  Users: any = [];
  // matcher = new MyErrorStateMatcher();

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private alert: AlertService
  ) {
    this.CreateUserGroup();
  }

  ngOnInit(): void {
    this.userService
      .getUserRoles()
      .subscribe(
        (data: any) =>
          (this.Roles = data.roles.filter(
            r => r.id > this.userService.loggedInUser.Roles[0]
          ))
      );
  }

  CreateUserGroup() {
    this.UserForm = this.fb.group({
      name: [""],
      userName: [""],
      mailId: ["", [Validators.email]],
      mobile: [""],
      Roles: [],
      CreatedBy: [""],
      status: [1]
    });
    // this.UserForm.get('Roles').setValue([1,2]);
    this.UserForm.get("CreatedBy").setValue(this.userService.loggedInUser.Id);
  }

  SaveUser() {
    if (this.UserForm.valid) {
      this.CreateUser();
    } else {
      this.IsFormSubmitted = true;
    }
  }

  CreateUser() {
    this.UserForm.get("Roles").setValue([+this.UserForm.value.Roles]);
    this.userService.createUser(this.UserForm.value).subscribe((val: any) => {
      this.alert.SuccesMessageAlert("User Created Succesfully", "Close");
      this.UserForm.reset();
    });
  }
}
