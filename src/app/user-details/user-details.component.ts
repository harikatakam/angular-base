import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  BankForm: FormGroup;

  DocumentForm: FormGroup;

  IsFormSubmitted = false;

  constructor(public fb: FormBuilder) {
    this.CreateBankForm();
    this.CreateDocumentForm();
  }

  ngOnInit(): void {}

  CreateBankForm() {
    this.BankForm = this.fb.group({
      AcNo: ["", Validators.required],
      Name: [""],
      IFSC: ["", Validators.required]
    });
  }

  CreateDocumentForm() {
    this.DocumentForm = this.fb.group({
      DocumentType: ["", Validators.required],
      PanNo: ["", Validators.required],
      PanName: [""],
      AadharNo: ["", Validators.required],
      AadharName: [""]
    });
  }

  SaveBankInfo() {
    console.log(this.BankForm.value);
  }

  SaveDocs() {
    console.log(this.DocumentForm.value);
  }
}
