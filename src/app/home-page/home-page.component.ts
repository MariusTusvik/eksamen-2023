import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  scrollToContact() {
    let contactInfo = document.getElementById('contact');
    if (contactInfo !== null) {
      contactInfo.scrollIntoView({ behavior: 'smooth' });
      contactInfo = null;
    }
  }
}
