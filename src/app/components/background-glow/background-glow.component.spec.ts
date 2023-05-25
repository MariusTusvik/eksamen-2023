import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGlowComponent } from './background-glow.component';

describe('BackgroundGlowComponent', () => {
  let component: BackgroundGlowComponent;
  let fixture: ComponentFixture<BackgroundGlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundGlowComponent]
    });
    fixture = TestBed.createComponent(BackgroundGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
