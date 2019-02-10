import { Injectable } from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {map, switchMap} from 'rxjs/operators';
import { auth } from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid = this.afAuth.authState.pipe(map(authState => {
    if (!authState) {
      return null;
    } else {
      return authState.uid;
    }
  }));
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.afStore.doc<boolean>('/admins/' + uid).valueChanges();
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore) {

  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
