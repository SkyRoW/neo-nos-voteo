import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact/contact.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {

  contacts$;
  constructor(private _contactService: ContactService) {
    this.contacts$ = _contactService.getContacts();
  }

  ngOnInit() {
  }

}
