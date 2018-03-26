import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../card';
import { DataKeeperService } from '../data-keeper.service';
import { fadeInAnimation } from '../animation-const';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./mainpage.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class MainpageComponent implements OnInit, OnDestroy {
  constructor(private keeper : DataKeeperService ) { }
  cardList: Card[] = null;

  ngOnInit() {
    this.keeper.pagename.next("全カード検索");
    console.log("init");
     if (this.keeper.cardList != null){
        this.cardList =  this.keeper.cardList;
     }
  }
  ngOnDestroy(): void {
   
  }

}
