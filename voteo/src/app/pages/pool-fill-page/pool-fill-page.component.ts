import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {stringFromHex} from '../../shared/helper';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-pool-fill-page',
  templateUrl: './pool-fill-page.component.html',
  styleUrls: ['./pool-fill-page.component.scss']
})
export class PoolFillPageComponent implements OnInit {

  pool = {};
  error;

  constructor(private route: ActivatedRoute, private _poolService: PoolsService) {}

  ngOnInit() {
    // this.pool = stringFromHex(this.route.snapshot.data.pool.stack[0].value);

    this._poolService.getPoolById("1").subscribe(
      result => this.pool = stringFromHex(result.stack[0].value),
      error => this.error = error
    );

    //this.pool = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value));
  }


}
