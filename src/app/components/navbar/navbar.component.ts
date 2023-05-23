import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  icons  = [
    {link: "/assets/design-elements/social-icons/twitter.png"},
    {link: "/assets/design-elements/social-icons/linkedin.png"},
    {link: "/assets/design-elements/social-icons/instagram.png"},
    {link: "/assets/design-elements/social-icons/facebook.png"}
  ]
}
