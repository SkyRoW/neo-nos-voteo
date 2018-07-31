import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-pools-page',
  templateUrl: './pools-page.component.html',
  styleUrls: ['./pools-page.component.scss']
})
export class PoolsPageComponent implements OnInit {

  pools$;

  constructor(private _poolsService: PoolsService) {
    this.pools$ = _poolsService.getUserPools();
  }

  ngOnInit() {
  }

}
