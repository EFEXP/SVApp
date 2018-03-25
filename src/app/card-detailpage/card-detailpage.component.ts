import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataKeeperService } from '../data-keeper.service';
import { Card } from '../card';

@Component({
  selector: 'app-card-detailpage',
  templateUrl: './card-detailpage.component.html',
  styleUrls: ['./card-detailpage.component.scss']
})
export class CardDetailpageComponent implements OnInit {
  card : Card;
  constructor(private route : ActivatedRoute, public keeper : DataKeeperService ) { }

  ngOnInit() {
    this.keeper.pagename.next("詳細");
    this.card = this.keeper.card;
    console.log(this.keeper.card);
    

  }

}
