import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"]
})
export class UserManagementComponent implements OnInit {
  files;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.setTreeNode();
  }

  setData() {
    setTimeout(() => {
      this.setTreeNode()
        .toPromise()
        .then(files => {
          this.files = files;
          this.changeDetectorRef.detectChanges();
        });
    });
  }

  setTreeNode() {
    return of({
      leaf: false,
      data: [
        {
          data: {
            name: "Documents",
            size: "75kb",
            type: "Folder"
          },
          leaf: false,
          children: [
            {
              data: {
                name: "Work",
                size: "55kb",
                type: "Folder"
              },
              leaf: false,
              children: [
                {
                  data: {
                    name: "Expenses.doc",
                    size: "30kb",
                    type: "Document"
                  }
                },
                {
                  data: {
                    name: "Resume.doc",
                    size: "25kb",
                    type: "Resume"
                  }
                }
              ]
            },
            {
              data: {
                name: "Home",
                size: "20kb",
                type: "Folder"
              },
              leaf: false,
              children: [
                {
                  data: {
                    name: "Invoices",
                    size: "20kb",
                    type: "Text"
                  }
                }
              ]
            }
          ]
        },
        {
          data: {
            name: "Pictures",
            size: "150kb",
            type: "Folder"
          },
          leaf: false,
          children: [
            {
              data: {
                name: "barcelona.jpg",
                size: "90kb",
                type: "Picture"
              }
            },
            {
              data: {
                name: "primeui.png",
                size: "30kb",
                type: "Picture"
              }
            },
            {
              data: {
                name: "optimus.jpg",
                size: "30kb",
                type: "Picture"
              }
            }
          ]
        }
      ]
    });
  }
}
