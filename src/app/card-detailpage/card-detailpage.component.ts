import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataKeeperService } from '../data-keeper.service';
import { Card } from '../card';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';

@Component({
  selector: 'app-card-detailpage',
  templateUrl: './card-detailpage.component.html',
  styleUrls: ['./card-detailpage.component.scss']
})
export class CardDetailpageComponent implements OnInit {
  card: Card;
  constructor(private route: ActivatedRoute, public keeper: DataKeeperService, private getCard: GetCardService) { }

  ngOnInit() {
    this.keeper.pagename.next("詳細");

    this.route.params.subscribe(
      params => {
        console.log(params);
        this.getCard
        .getCardQuery(new Query("", "", "", params["id"], -1, "", -1) )
        .subscribe(
          it => 
          this.card = it[0]

        );

      }
    );


  }

}
