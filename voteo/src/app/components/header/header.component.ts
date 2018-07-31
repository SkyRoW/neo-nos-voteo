import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages = [
    'sk', 'en'
  ];

  selectedLanguage;

  constructor(private _translateService: TranslateService,
              private _poolsService: PoolsService) {
  }

  changeLanguage(language) {
    this._translateService.use(language);
    this.selectedLanguage = language;
  }

  ngOnInit() {
    this.selectedLanguage = this.languages[1];
  }

  get address() {
    return this._poolsService.address || '-';
  }
}
