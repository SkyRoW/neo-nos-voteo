import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolActionsComponent } from './pool-actions.component';

describe('PoolActionsComponent', () => {
  let component: PoolActionsComponent;
  let fixture: ComponentFixture<PoolActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
