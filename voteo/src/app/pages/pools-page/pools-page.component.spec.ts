import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsPageComponent } from './pools-page.component';

describe('PoolsPageComponent', () => {
  let component: PoolsPageComponent;
  let fixture: ComponentFixture<PoolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
