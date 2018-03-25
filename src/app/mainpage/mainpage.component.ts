import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { DataKeeperService } from '../data-keeper.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  constructor(private keeper : DataKeeperService ) { }
  cardList: Card[] = null;

  ngOnInit() {
    this.keeper.pagename.next("全カード検索");
    console.log("init");
     if (this.keeper.cardList != null){
        this.cardList =  this.keeper.cardList;
     }
  }

}
