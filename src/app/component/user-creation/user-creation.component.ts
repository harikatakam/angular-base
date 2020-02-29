import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: "app-user-creation",
  templateUrl: "./user-creation.component.html",
  styleUrls: ["./user-creation.component.scss"]
})
export class UserCreationComponent implements OnInit {
  UserForm: FormGroup;
  IsFormSubmitted = false;
  roles;

  constructor(public fb: FormBuilder, private userService: UserService) {
    this.CreateUserGroup();
  }

  ngOnInit(): void {
    this.userService.getUserRoles().subscribe((roles: any) => this.roles = roles.filter(
      r => r.id > this.userService.loggedInUser.roles.$values[0]));
  }

  CreateUserGroup() {
    this.UserForm = this.fb.group({
      name: ["", Validators.required],
      userName: ["", Validators.required],
      mailId: ["", Validators.email],
      mobile: ["", Validators.required],
      roles: [""],
      CreatedBy: [""],
    });
    // this.UserForm.get('roles').setValue([1,2]);
    this.UserForm.get("CreatedBy").setValue(this.userService.loggedInUser.Id);

  }

  SaveUser() {
    // const UserInfo: any = this.UserForm.getRawValue();
    // if (this.UserForm.valid) {
    //   console.log(UserInfo);
    //   this.CreateUser(UserInfo);
    // } else {
    //   this.IsFormSubmitted = true;
    // }
    this.CreateUser(null);
  }

  CreateUser(CreateUserGroup: any) {
    this.UserForm.get('roles').setValue([this.UserForm.value.roles]);
    this.userService.createUser(this.UserForm.value).subscribe();
  }
}
