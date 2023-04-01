import { Component, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-environments';
  public mode =
    isDevMode() && environment.production == false
      ? 'Development Environment'
      : 'Production Environment';
  constructor() {
    if (isDevMode() && environment.production == false) {
      console.log('Development Environment');
    } else {
      console.log('Production Environment');
    }
  }
}
