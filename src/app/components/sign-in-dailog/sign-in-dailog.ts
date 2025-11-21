import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormField, MatSuffix, MatPrefix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import { SignInParams } from '../../models/user';
import { EcommerceStore } from '../../ecommerce-store';
import Checkout from '../../pages/checkout/checkout';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-sign-in-dailog',
  imports: [MatIconButton, MatIcon, MatDialogClose, MatFormField, MatInput, MatSuffix, MatPrefix, MatButton,ReactiveFormsModule,],
  templateUrl: './sign-in-dailog.html',
  styleUrl: './sign-in-dailog.scss',
})
export class SignInDailog {

  store = inject(EcommerceStore);
  formBuilder = inject(NonNullableFormBuilder);
  data = inject<{checkout:boolean}>(MAT_DIALOG_DATA);
  dailogRef = inject(MatDialogRef);
  matdialog = inject(MatDialog);


  signInForm = this.formBuilder.group({
    email: ['johnd@test.com', Validators.required],
    password: ['test123', Validators.required]
  });

  passwordVisible = signal(false);

  signIn(){
    if(!this.signInForm.valid){
      this.signInForm.markAllAsTouched()
      return;
    }
    const {email,password} = this.signInForm.value;

    this.store.signIn({email,
      password,
      checkout:this.data?.checkout,
      dailogId:this.dailogRef.id
    } as SignInParams);
  }

  openSignUpDialog(){
    this.dailogRef.close()
    this.matdialog.open(SignUpDialog,{
      disableClose:true,
      data:{
        checkout:this.data?.checkout
      }
    })
  }
}
