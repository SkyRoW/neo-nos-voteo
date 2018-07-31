import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionPageComponent } from './new-question-page.component';

describe('NewQuestionPageComponent', () => {
  let component: NewQuestionPageComponent;
  let fixture: ComponentFixture<NewQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
