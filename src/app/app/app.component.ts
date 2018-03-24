import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../card';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';
// 103241010 105041010
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GetCardService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cardList: Card[] = null;
  showFiller = false;
  title = 'app';


}
