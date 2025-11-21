import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton, MatAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatPrefix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { EcommerceStore } from '../../ecommerce-store';
import { SignUpParams } from '../../models/user';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignInDailog } from '../sign-in-dailog/sign-in-dailog';
import Checkout from '../../pages/checkout/checkout';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [MatIconButton, MatIcon, MatFormField, MatInput, MatPrefix, ɵInternalFormsSharedModule, ReactiveFormsModule, MatAnchor],
  templateUrl: './sign-up-dialog.html',
  styleUrl: './sign-up-dialog.scss',
})
export class SignUpDialog {

  formBuilder = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);
  dialogRef = inject(MatDialogRef); 
  matdialog = inject(MatDialog);
  data = inject<{checkout:boolean}>(MAT_DIALOG_DATA);
  

  signUpForm = this.formBuilder.group({
    name:['John D', Validators.required],
    
    email: ['johnd@test.com',Validators.required],
    password: ['test123',Validators.required],
    confirmPassword: ['test123',Validators.required],
    
  })

  signUp(){
    if(!this.signUpForm.valid){
      this.signUpForm.markAllAsTouched();
      return;
    }
    const {name,email,password} = this.signUpForm.value;
    
    this.store.signUp({
        name, email,
        password, 
        dailogId: this.dialogRef.id,
        checkout:this.data?.checkout
    }as SignUpParams)
  }

  openSignInDialog(){
    this.dialogRef.close();
    this.matdialog.open(SignInDailog,{
      disableClose:true,
       data:{
        Checkout:this.data?.checkout
      }
    })
  }

}
