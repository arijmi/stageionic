import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificationemailPage } from './verificationemail.page';

describe('VerificationemailPage', () => {
  let component: VerificationemailPage;
  let fixture: ComponentFixture<VerificationemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
