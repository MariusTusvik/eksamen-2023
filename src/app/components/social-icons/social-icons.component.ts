import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent {
  icons = [
    { icon: '/assets/design-elements/social-icons/twitter.png' },
    { icon: '/assets/design-elements/social-icons/linkedin.png' },
    { icon: '/assets/design-elements/social-icons/instagram.png' },
    { icon: '/assets/design-elements/social-icons/facebook.png' },
  ];
}
