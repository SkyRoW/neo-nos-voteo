import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact/contact.service';

@Component({
  selector: 'app-page-skelet',
  templateUrl: './page-skelet.component.html',
  styleUrls: ['./page-skelet.component.scss']
})
export class PageSkeletComponent implements OnInit {

  contact$;

  constructor(private _contactService: ContactService) {
    this.contact$ = _contactService.getOwnUserInfo();
  }

  ngOnInit() {
  }

}
