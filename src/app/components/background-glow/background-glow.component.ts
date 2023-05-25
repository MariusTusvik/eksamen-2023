import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-glow',
  templateUrl: './background-glow.component.html',
  styleUrls: ['./background-glow.component.scss']
})
export class BackgroundGlowComponent {
  @Input() glow1: boolean = false;
  @Input() glow2: boolean = false;
  @Input() glowPosition: string = '-top-10';
}
