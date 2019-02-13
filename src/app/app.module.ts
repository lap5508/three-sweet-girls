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
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = environment.firebaseConfig;

// components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SoapTileComponent } from './soap-tile/soap-tile.component';
import { SoapTileDetailComponent } from './soap-tile-detail/soap-tile-detail.component';
import { AddSoapComponent } from './add-soap/add-soap.component';
import { DropZoneDirective } from './Directives/drop-zone.directive';
import { FileUploadComponent } from './shared/upload/file-upload.component';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:soap', component: SoapTileDetailComponent },
  { path: 'add', component: AddSoapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SoapTileComponent,
    SoapTileDetailComponent,
    AddSoapComponent,
    DropZoneDirective,
    FileUploadComponent
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
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    FirebaseProvider
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
