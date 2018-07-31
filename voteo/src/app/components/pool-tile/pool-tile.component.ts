import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-tile',
  templateUrl: './pool-tile.component.html',
  styleUrls: ['./pool-tile.component.scss']
})
export class PoolTileComponent implements OnInit {

  @Input()
  pool;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openVoting() {
    if (this.hasFreeVoting) {
      this.router.navigate([`pool/${this.pool}`]);
    }
  }

  get poolTitle() {
    return (this.pool.name) ? this.pool.name : this.pool;
  }

  get numberOfQuestions() {
    return (this.pool.questionCount) ? this.pool.questionCount : 0;
  }

  get voted() {
    return (this.pool.voted) ? this.pool.voted : 0;
  }

  get neededVoters() {
    return (this.pool.needsVotes) ? this.pool.needsVotes : 0;
  }

  get hasFreeVoting() {
    return true; //this.voted < this.neededVoters;
  }
}
