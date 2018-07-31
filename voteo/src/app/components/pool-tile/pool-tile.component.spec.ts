import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTileComponent } from './pool-tile.component';

describe('PoolTileComponent', () => {
  let component: PoolTileComponent;
  let fixture: ComponentFixture<PoolTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
