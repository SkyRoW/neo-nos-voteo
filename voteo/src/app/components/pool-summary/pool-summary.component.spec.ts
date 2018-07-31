import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSummaryComponent } from './pool-summary.component';

describe('PoolSummaryComponent', () => {
  let component: PoolSummaryComponent;
  let fixture: ComponentFixture<PoolSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
