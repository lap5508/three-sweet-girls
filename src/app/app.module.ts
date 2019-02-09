import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// utility
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

// firebase
import { FirebaseModule, FirebaseProvider } from 'angular-firebase';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    FirebaseProvider
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
