import { Injectable } from '@angular/core';
import firebase from'firebase/compat/app';
import { AngularFireAuth } from'@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(public ngFireAuth: AngularFireAuth ) { }


  async registerUser(email: string, password: string) {
    
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    
  }

  async login(email: string, password: string) {
   
      return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
   
  }


  async resetpassword(email: string) {
  
      return await this.ngFireAuth.sendPasswordResetEmail(email);
    
  }
  async singout() {
    await this.ngFireAuth.signOut();
  }
  getProfile() {
    return this.ngFireAuth.currentUser;
  }
}
    
  

