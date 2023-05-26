import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hamar-utvikling';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
     const storedValue = localStorage.getItem('cookieAccepted');
      if (storedValue != 'true') {
        this.openDialog();
      }

  }
  openDialog() {
  this.dialog.open(CookieBannerComponent);
  }
}
