import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  scrollToLocation() {
    let location = document.getElementById('location');
    if (location !== null) {
      location.scrollIntoView({ behavior: 'smooth' });
      location = null;
    }
  }
}
