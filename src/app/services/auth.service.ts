import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  //Login User
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => {
          resolve(userData);
        },
        err => reject(err)
      );
    });
  }
  //Logout User
  logout() {
    this.afAuth.auth.signOut();
  }

  //Check User State
  getAuth() {
    return this.afAuth.user;
  }
}
