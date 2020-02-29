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
  roles: any = [];
  // matcher = new MyErrorStateMatcher();

  constructor(public fb: FormBuilder, private userService: UserService) {
    this.CreateUserGroup();
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

  CreateUserGroup() {
    this.UserForm = this.fb.group({
      name: [""],
      userName: [""],
      mailId: ["", [Validators.email]],
      mobile: [""],
      roles: [""],
      CreatedBy: [""]
    });
    // this.UserForm.get('roles').setValue([1,2]);
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
    this.UserForm.get("roles").setValue([this.UserForm.value.roles]);
    this.userService.createUser(this.UserForm.value).subscribe();
  }
}
