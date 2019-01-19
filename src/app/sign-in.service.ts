import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public signedIn: number

  public user : User
  constructor() {
    this.signedIn=-1
  }

  signIn(){
    
  }

}
