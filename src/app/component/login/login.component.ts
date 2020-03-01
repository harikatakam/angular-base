import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/Services/authentication.service";
import { UserService } from "src/app/Services/user.service";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        userDetails => {
          this.error = null;
          this.loading = false;
          this.router.navigateByUrl(this.returnUrl);
          this.userService.storeUserTokenandDetails(userDetails);
        },
        error => {
          this.error = error.error.message;
          this.loading = false;
        }
      );
  }
}
