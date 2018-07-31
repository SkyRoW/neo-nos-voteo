import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolActionElementComponent } from './pool-action-element.component';

describe('PoolActionElementComponent', () => {
  let component: PoolActionElementComponent;
  let fixture: ComponentFixture<PoolActionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolActionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolActionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
