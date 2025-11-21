import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDailog } from './sign-in-dailog';

describe('SignInDailog', () => {
  let component: SignInDailog;
  let fixture: ComponentFixture<SignInDailog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInDailog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInDailog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
