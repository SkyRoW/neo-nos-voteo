import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pool-summary',
  templateUrl: './pool-summary.component.html',
  styleUrls: ['./pool-summary.component.scss']
})
export class PoolSummaryComponent implements OnInit {

  @Output()
  onSubmitPressed = new EventEmitter();
  @Output()
  onBackPressed = new EventEmitter();
  @Input()
  pool;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSubmitPressed.next();
  }

  back() {
    this.onBackPressed.next();
  }

  get name() {
    return this.questions.name;
  }

  get openEnded() {
    return this.questions.openEnded;
  }

  get multiple() {
    return this.questions.multiple;
  }

  get options() {
    return this.questions.options;
  }

  get questions() {
    return this.pool.questions;
  }

  get settings() {
    return this.pool.settings;
  }

}
