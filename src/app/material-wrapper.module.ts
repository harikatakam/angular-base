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
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";

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
  ]
})
export class MatWrapperModule {}
