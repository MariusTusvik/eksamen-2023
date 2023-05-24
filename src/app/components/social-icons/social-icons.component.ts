import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent {
  icons = [
    { link: '/assets/design-elements/social-icons/twitter.png' },
    { link: '/assets/design-elements/social-icons/linkedin.png' },
    { link: '/assets/design-elements/social-icons/instagram.png' },
    { link: '/assets/design-elements/social-icons/facebook.png' },
  ];
}
