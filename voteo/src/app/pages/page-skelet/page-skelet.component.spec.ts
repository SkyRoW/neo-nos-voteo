import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkeletComponent } from './page-skelet.component';

describe('PageSkeletComponent', () => {
  let component: PageSkeletComponent;
  let fixture: ComponentFixture<PageSkeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSkeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
