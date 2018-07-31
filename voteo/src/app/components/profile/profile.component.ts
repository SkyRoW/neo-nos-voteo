import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('cryptoAddressElement')
  cryptoAddressElement;

  @Input()
  profile;
  @Input()
  pictureSize = 150;

  constructor(private _poolsService: PoolsService) { }

  ngOnInit() {
  }

  copyToClipboard() {
    this.cryptoAddressElement.nativeElement.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  get cryptoAddress() {
    return this._poolsService.address || '-';
  }

  get address() {
    return this.profile.city;
  }

  get contacts() {
    return this.profile.contacts;
  }

  get email() {
    return this.profile.email;
  }

  get isValidated() {
    return this.profile.validated;
  }

  get name() {
    return this.profile.name;
  }

  get picture() {
    return this.profile.picture;
  }
}
