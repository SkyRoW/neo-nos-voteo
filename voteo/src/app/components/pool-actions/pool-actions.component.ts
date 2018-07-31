import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-actions',
  templateUrl: './pool-actions.component.html',
  styleUrls: ['./pool-actions.component.scss']
})
export class PoolActionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createPool() {
    this.router.navigate(['/create']);
  }

  get numberOfPools() {
    return {numberOfPools: 386};
  }
}
