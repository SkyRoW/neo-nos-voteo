import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolFillPageComponent } from './pool-fill-page.component';

describe('PoolFillPageComponent', () => {
  let component: PoolFillPageComponent;
  let fixture: ComponentFixture<PoolFillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolFillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolFillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
