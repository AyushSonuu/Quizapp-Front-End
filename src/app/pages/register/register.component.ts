import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService) { }
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }


  clearForm() {
    this.user = {
      username: '',
      firstName: '',
      password: '',
      email: '',
      lastName: '',
      phone: ''
    };
  }

  formSubmit() {
    console.log(this.user)

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (response) => {
        let data:User|any=response.body
        console.log(data.data);
        alert("Registration successful");
      },
      (error) => {
        console.log(error);
        alert("Something went wrong");
      }
    );
  }
}
