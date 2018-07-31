import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPoolsPageComponent } from './public-pools-page.component';

describe('PublicPoolsPageComponent', () => {
  let component: PublicPoolsPageComponent;
  let fixture: ComponentFixture<PublicPoolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPoolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
