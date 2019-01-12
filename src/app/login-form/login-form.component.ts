import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  userName: String
  ngOnInit() {
  }
  signUp(userForm: FormsModule){
    this.userName = "Pratik"
  }
  // signUp(){
  //   this.userName = "Pratik"
  // }

}
