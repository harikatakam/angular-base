import { NgModule } from "@angular/core";
import {
  MatSidenavModule,
  MatSidenavContent,
  MatSidenav
} from "@angular/material/sidenav";

import { MatToolbarModule } from "@angular/material/toolbar";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MdePopoverModule } from "@material-extended/mde";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    MdePopoverModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [
    MdePopoverModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MatWrapperModule {}
