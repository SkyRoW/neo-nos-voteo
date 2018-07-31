import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenPageComponent } from './splash-screen-page.component';

describe('SplashScreenPageComponent', () => {
  let component: SplashScreenPageComponent;
  let fixture: ComponentFixture<SplashScreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashScreenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
