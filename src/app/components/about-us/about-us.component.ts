import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  scrollToContact() {
    let contactInfo = document.getElementById('contact');
    if (contactInfo !== null) {
      contactInfo.scrollIntoView({ behavior: 'smooth' });
      contactInfo = null;
    }
  }
}
