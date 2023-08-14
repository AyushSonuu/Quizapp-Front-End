import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUsernameDialogComponent } from './forgot-username-dialog.component';

describe('ForgotUsernameDialogComponent', () => {
  let component: ForgotUsernameDialogComponent;
  let fixture: ComponentFixture<ForgotUsernameDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotUsernameDialogComponent]
    });
    fixture = TestBed.createComponent(ForgotUsernameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
