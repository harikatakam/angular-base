import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {
  UserForm: FormGroup;
  IsFormSubmitted = false;

  constructor(public fb: FormBuilder) {
    this.CreateUserGroup();
  }

  ngOnInit(): void {}

  CreateUserGroup() {
    this.UserForm = this.fb.group({
      Name: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      PhoneNo: ['', Validators.required]
    });
  }

  SaveUser() {
    const UserInfo: any = this.UserForm.getRawValue();
    if (this.UserForm.valid) {
      console.log(UserInfo);
      this.CreateUser(UserInfo);
    } else {
      this.IsFormSubmitted = true;
    }
  }

  CreateUser(CreateUserGroup: any) {
    console.log(CreateUserGroup);
  }
}
