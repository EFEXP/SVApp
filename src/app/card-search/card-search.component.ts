import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';
import { Card } from '../card';
import { DataKeeperService } from '../data-keeper.service';
@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {

 
  constructor(private getCard: GetCardService, public keeper: DataKeeperService) { }
  @Output() searchFinished = new EventEmitter<Card[]>();
  query = new Query();
  serching = false;

  cardset_dictionary = new Map<string, string>();

  ngOnInit(): void {
  

  }
  onSerchClick() {
    this.serching = true;
    console.log(this.query);
    this.getCard.getCardQuery(this.query).subscribe(
      data => {
        console.log(data);
        this.keeper.cardList = data;
        this.searchFinished.emit(data);
        this.serching = false;
      },
      ex => {
        console.log(ex);

      }
    );

  }
}
