import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { KYCApprovalComponent } from "./kyc-approval.component";

describe("KYCApprovalComponent", () => {
  let component: KYCApprovalComponent;
  let fixture: ComponentFixture<KYCApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KYCApprovalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
