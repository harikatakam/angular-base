import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-approve-kyc",
  templateUrl: "./approve-kyc.component.html",
  styleUrls: ["./approve-kyc.component.scss"]
})
export class ApproveKYCComponent implements OnInit {
  UserInfo: any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.GetUserData();
  }

  GetUserData() {
    this.userService.GetUserDetailsById(1002).subscribe((val: any) => {
      this.UserInfo = val;
    });
  }

  donwloadDocument(doc) {
    this.userService.getDocument(doc.name, this.UserInfo.id).subscribe((details: any) => {
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
    b64Data = b64Data.replace(/\s/g, "");
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }
}
