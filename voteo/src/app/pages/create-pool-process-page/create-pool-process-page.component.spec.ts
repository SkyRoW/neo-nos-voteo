import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoolProcessPageComponent } from './create-pool-process-page.component';

describe('CreatePoolProcessPageComponent', () => {
  let component: CreatePoolProcessPageComponent;
  let fixture: ComponentFixture<CreatePoolProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoolProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoolProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
