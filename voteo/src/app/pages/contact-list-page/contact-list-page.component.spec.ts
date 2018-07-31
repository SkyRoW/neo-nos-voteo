import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListPageComponent } from './contact-list-page.component';

describe('ContactListPageComponent', () => {
  let component: ContactListPageComponent;
  let fixture: ComponentFixture<ContactListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
