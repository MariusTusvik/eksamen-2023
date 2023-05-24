import { Component } from '@angular/core';

type Tab = 'USA' | 'Norway';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})


export class ContactInfoComponent {
  constructor() {
    this.setCenter();
  }

  activeTab: Tab = 'USA';
  center!: google.maps.LatLngLiteral;
  zoom = 12;


  locations: Record<Tab, google.maps.LatLngLiteral> = {
    USA: { lat: 40.73061, lng: -73.935242 },
    Norway: { lat: 40.712776, lng: -74.005974 },
  };

  setActiveTab(tab: Tab): void {
    this.activeTab = tab;
    this.setCenter();
  }

  setCenter(): void {
    this.center = this.locations[this.activeTab];
  }
}
