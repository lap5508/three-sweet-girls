import { Component } from '@angular/core';
import { UserService } from './shared/user/user.service';
import { HomePageConstants } from './home-page/home-page-constants.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'user-service';

  constructor(public user: UserService, public labelConstants: HomePageConstants) {
    user.logout();
  }
}
