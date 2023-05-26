import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  scrollToContact() {
    let contact = document.getElementById('contact');
    if (contact !== null) {
      contact.scrollIntoView({ behavior: 'smooth' });
      contact = null;
    }
  }
}
