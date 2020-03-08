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
  Roles: any = [];
  currentUser;
  adharDoc;
  panDoc;
  ChequeLeaf;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    public alert: AlertService
  ) {
    this.SubsribeCurrentUserData();
  }

  ngOnInit(): void {}

  SubsribeCurrentUserData() {
    this.userService.loggedInUserUpdated$.subscribe((user: any) => {
      console.log(user);
      this.currentUser = user;
      this.GetUserRoles();
      this.CreateBankForm(user);
    });
  }

  GetUserRoles() {
    this.userService
      .getUserRoles()
      .subscribe((data: any) => (this.Roles = data.roles));
    this.adharDoc = this.currentUser.documents.find(d => d.name === "Aadhar");
    this.panDoc = this.currentUser.documents.find(d => d.name === "PAN");
    this.ChequeLeaf = this.currentUser.documents.find(
      d => d.name === "ChequeLeaf"
    );
  }

  CreateBankForm(LoginData: any) {
    if (LoginData === null) {
      LoginData = {};
    }
    this.UserForm = this.fb.group({
      id: [LoginData.id],
      name: [LoginData.name],
      userName: [LoginData.userName],
      mailId: [LoginData.mailId],
      mobile: [LoginData.mobile],
      Roles: [LoginData.roles[0]],
      // CreatedBy: [LoginData.CreatedBy],
      accountNumber: [LoginData.bankAccounts[0]?.accountNumber],
      nameInBank: [LoginData.bankAccounts[0]?.nameInBank],
      ifscCode: [LoginData.bankAccounts[0]?.ifscCode],
      bankName: [LoginData.bankAccounts[0]?.bankName],
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
    const formdata: any = this.UserForm.getRawValue();
    formdata.Status = this.currentUser.status;
    delete formdata.AcNo;
    delete formdata.Name;
    delete formdata.IFSC;
    delete formdata.aadhar;
    delete formdata.Pan;
    formdata.Roles = [formdata.Roles];
    formdata.BankAccounts = [
      {
        accountNumber: this.UserForm.value.accountNumber,
        nameInBank: this.UserForm.value.nameInBank,
        ifscCode: this.UserForm.value.ifscCode,
        bankName: this.UserForm.value.bankName
      }
    ];
    this.userService.updateUSer(formdata).subscribe((val: any) => {
      this.alert.SuccesMessageAlert("User Updated Succesfully", "Close");
    });
  }

  UploadFile(type, fileElement) {
    const file = (fileElement as HTMLInputElement).files[0];

    const formData = new FormData();
    formData.append("UserId", this.currentUser.id);
    formData.append("Name", type);
    formData.append("Type", "KYC");
    formData.append(
      "FileType",
      file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length)
    );

    const reader = new FileReader();

    reader.onload = () => {
      formData.append("DataAsBase64", reader.result.toString());
      this.userService.uploadDocuments(formData).subscribe(res => {
        console.log("Uploaded successfully");
      });
    };
    reader.readAsDataURL(file);
  }

  setFileName() {}

  donwloadDocument(doc) {
    this.userService.getDocument(doc.name).subscribe((details: any) => {
      // const data = this.base64ToBlob(details[0].DataAsBase64, "application/" + details[0].fileType);;
      // TODO :: moove downlod doc from bytes to Unitls Service
      // const blob = new Blob([data], {type: "application/" + details[0].fileType});
      const blob = this.base64ToBlob(
        details[0].dataAsBase64,
        "application/" + details[0].fileType
      );
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      const fileName = doc.name + "." + details[0].fileType;
      link.download = fileName;
      link.click();
      document.removeChild(link);
    });
  }

  public base64ToBlob(b64Data, contentType = "", sliceSize = 512) {
    b64Data = b64Data.replace(/\s/g, ""); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }
}
