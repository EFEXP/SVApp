import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, OnDestroy, DoCheck } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Card } from '../card';
import { Router } from '@angular/router';
import { DataKeeperService } from '../data-keeper.service';
//'https://shadowverse-portal.com/image/card/ja/C_'+ card.card_id + 'png.jpg'
//'https://s3.ap-northeast-1.amazonaws.com/shadowverse-photos/card/'+ card.card_id + '0.jpg'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent  implements OnChanges{
  constructor(private router: Router, private keeper : DataKeeperService ) { }
  @Input() cardList: Card[];
   showCardList: Card[];
   ngOnChanges(changes: SimpleChanges) {
     if ( "cardList" in changes){
      this.showCardList = this.cardList.slice(0, 15);
     }
  }

 clickCard(card){
    this.keeper.card = card;
    this.router.navigate(['/detail']);
  }
  getCardSliced(page: number): void {
    console.log(page);
   this.showCardList = 
   this.cardList.slice(page  * 15, 15 + page * 15);
  }



}
