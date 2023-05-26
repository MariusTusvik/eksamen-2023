import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent {

  constructor() {}

  acceptCookies() {
    console.log('Cookies accepted');
    localStorage.setItem('cookieAccepted', 'true');
  }

}
