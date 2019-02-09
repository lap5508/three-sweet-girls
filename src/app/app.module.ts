import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// utility
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';

// firebase
import { FirebaseModule, FirebaseProvider } from 'angular-firebase';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = environment.firebaseConfig;

// components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SoapTileComponent } from './soap-tile/soap-tile.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SoapTileComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    TooltipModule.forRoot(),
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
