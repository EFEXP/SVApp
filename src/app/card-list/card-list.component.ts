import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Card } from '../card';
//'https://shadowverse-portal.com/image/card/ja/C_'+ card.card_id + 'png.jpg'
//'https://s3.ap-northeast-1.amazonaws.com/shadowverse-photos/card/'+ card.card_id + '0.jpg'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent  implements OnChanges{
  @Input() cardList;
   showCardList;
   ngOnChanges(changes: SimpleChanges) {
     if ( "cardList" in changes){
      this.showCardList = this.cardList.slice(0, 20);
     }
    
  }
  getCardSliced(page: number): void {
    console.log(page);
   this.showCardList = 
   this.cardList.slice(page  * 20, 20 + page * 20);
  }



}
