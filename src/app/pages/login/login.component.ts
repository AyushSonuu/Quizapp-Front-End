import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ForgotPasswordDialogComponent } from 'src/app/components/forgot-password-dialog/forgot-password-dialog.component';
import { ForgotUsernameDialogComponent } from 'src/app/components/forgot-username-dialog/forgot-username-dialog.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dialog:MatDialog, private login:LoginService, private router:Router){}
  
  loginData={
    username:'',
    password:''
  };

  clearForm() {
    this.loginData = {
      username:'',
      password:''
    };
  }

  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.password.trim()==''){
      alert('Field is missing') 
    }

    //Request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (info:any)=>{
        console.log('success');
        console.log(info.data);
        
        //Login...
        this.login.loginUser(info.data);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user.data);
            console.log(user.data);

            //if(ADMIN)---->rdirect to admin dashboard
            if(this.login.getUserRole() == 'ADMIN'){
              window.location.href='/admin'
            }
            //if(NORMAL)---->rdirect to normal dashboard
            else if(this.login.getUserRole() == 'STUDENT'){
              this.router.navigate(['user-dashboard'])
            } else {
              this.login.logout(); 
            }
          }
        )
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
      }
    ); 
  }


  openDialog(){
    this.dialog.open(ForgotPasswordDialogComponent);
  }
  openDialog2(){
    this.dialog.open(ForgotUsernameDialogComponent);
  }
} 
