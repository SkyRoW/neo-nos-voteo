import {Injectable} from '@angular/core';
import {NosApiService} from '../../nos-wrapper/services/nos-api.service';
import {Methods} from '../Methods';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoolsService {

  address;

  constructor(private _nosService: NosApiService) {
    if (_nosService.isConnected()) {
      _nosService.getAddress().subscribe(
        address => this.address = address
      );
    }
  }

  public getUserPools() {
    return of([
      {
        name: 'What do you like?',
        questionCount: 14,
        voted: 12,
        needsVotes: 100
      },
      {
        name: 'What do you want for christmas?',
        questionCount: 14,
        voted: 80,
        needsVotes: 100
      },
      {
        name: 'What kind of person are you',
        questionCount: 20,
        voted: 120,
        needsVotes: 120
      },
    ]);
  }

  public getPublicPools() {
    const publicPools = [];

    for (let i = 0; i < 100; i++) {
      publicPools.push({
        name: 'What do you like?',
        questionCount: 14,
        voted: 12,
        needsVotes: 100
      });
      publicPools.push({
        name: 'What do you want for christmas?',
        questionCount: 14,
        voted: 80,
        needsVotes: 100
      });
      publicPools.push({
        name: 'What kind of person are you',
        questionCount: 20,
        voted: 120,
        needsVotes: 120
      });
    }

    return of(publicPools);
  }

  public getPool(id) {
    // return of({
    //   id: 0,
    //   name: 'What do you think about yourself',
    //   questions: [{
    //     name: 'kto si',
    //     'openEnded': false,
    //     'multiple': false,
    //     'options': [
    //       {'label': 'ja'},
    //       {'label': 'ty'},
    //       {'label': 'on'},
    //     ]
    //   },{
    //       name: 'where have you been',
    //       'openEnded': true,
    //       'multiple': true,
    //       'options': [
    //         {'label': 'ja'},
    //         {'label': 'ty'},
    //         {'label': 'on'},
    //       ]
    //     }]
    // });
    // return this._nosService.getStorage(
    //   Methods.scriptHash,
    //   'poll'
    // );
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolOperation,
      ['eqweqw']);
  }

  public getAllPublic() {
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPublicAll,
      [this._nosService.address]
    );
  }

  public getPoolById(id): Observable<any> {

    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolById,
      [this._nosService.address, id]
    );
  }

  public createPool(poolParams: any) {

   return this._nosService.invoke(
      Methods.scriptHash,
      Methods.createPoolOperation,
      [this._nosService.address, JSON.stringify(poolParams), '']
    );
  }

  public getPoolInvoke(script) {
    return this._nosService.invoke(
      script,
      Methods.createPoolOperation,
      ['dsajdksajkasdjskksksajdaskjsadkdjaskLUKAS', 'LUKAS']
    );
  }

  public testStorage() {
    return this._nosService.getStorage(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'bucket.neo.target'
    );
  }

  public testInvoke() {
    return this._nosService.testInvoke(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'GetDomain',
      ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']
    );
  }
}
