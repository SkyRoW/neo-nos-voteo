import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-action-element',
  templateUrl: './pool-action-element.component.html',
  styleUrls: ['./pool-action-element.component.scss']
})
export class PoolActionElementComponent implements OnInit {

  @Input() label;
  @Input() picture;
  @Input() redirectLink;

  hovered;

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.hovered = true;
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.hovered = false;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToPage() {
    this.router.navigate([this.redirectLink]);
  }
}
