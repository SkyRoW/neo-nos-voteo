import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  @Input()
  pool;

  poolForm;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.poolForm = this.fb.group({
      'id': [this.pool.id],
      questions: this.fb.array([]),
    });
  }

  submitForm({value}) {

  }
}
