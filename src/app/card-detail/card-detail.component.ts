import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from '../card';
import { fadeInAnimation } from '../animation-const';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class CardDetailComponent implements OnInit, OnDestroy {


  @Input() card;
  constructor() { }

  ngOnDestroy(): void {

  }
  ngOnInit() {
  }

}
