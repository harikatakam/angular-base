# InsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

// ToDOs
// 1. create navigation component and move all nav related code from app component to new one --done
// 2. Create all variables in variables scss file use them all the places where colors are being used --done
// 3. Cleanup variables css file move the global styles to styles.scss file --done
// 4. padding for "sales App" header and toggle icon --done
// 5. Logo place holder to new app-header component --done
// 6. Verical center align for header items --done
// 7. Popover for user profile Icon and add user minimal details --done
// 8. Add routes , create dashboard route and component .. make this default route --done
// 9. create Data Service (Http client wrapper) create a property to show spinner, it should be bheaviral subject
// 10. Create HTTP interseptor to add token to all ouot going requests if token not avaiable/ expired it should redirect to login route
// 11. Add gloabal exception handler
// 12. Create "CoreModule" and move all generic purpose things to this, HTTp interceptor, golbal exception handler, broadcasting service,....
// 13. when side nav in hidden mode , after clicking navigation item it should close --done
// Page heading for both creation and profile gae --done
// Profile rooute click on user profile icon on top right and remove it from left nav --done
// Paddings :: page title and bottom buttons --done
// Button color and it should be on component remove buttons from each step --done
// from validations after only submit

1. User creation:: after save show MatSnackBarConfig bar vertical top horizantal center and clear all fields --done
2. User creation:: when save check username and email already exists :: show red lable below the text box
3. Document :: Update styles --done
4. Login, if IsPasswordChangeRequired: true, redirect to changepassword route :: save here will call ChangePassword {
   oldPassword,
   newPassword,
   userId

}--done

5. after succesfull change password redirecto login --done
