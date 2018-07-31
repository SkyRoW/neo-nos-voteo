import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getOwnUserInfo() {
    return of(
      {
        name: 'Kamil Bitcoach',
        city: 'Bratislava',
        contacts: 12,
        email: 'info@bitcoach.net',
        picture: 'https://pbs.twimg.com/profile_images/934317901745655809/giHHc1bR_400x400.jpg',
        validated: true
      });
  }

  getContacts(): Observable<any> {
    return of([
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com',
        validated: true
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com',
        validated: true
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com',
        validated: true
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com'
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com'
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 32,
        email: 'branomo@gmail.com'
      },
      {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 12,
        email: 'branomo@gmail.com'
      }, {
        name: 'Branislav Mojsej',
        picture: '/assets/img/check.png',
        city: 'Munchen',
        contacts: 920,
        email: 'branomo@gmail.com'
      }
    ]);
  }
}
