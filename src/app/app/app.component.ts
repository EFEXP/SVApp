import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../card';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';
import { Router } from '@angular/router';
import { DataKeeperService } from '../data-keeper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor( private keeper : DataKeeperService ) { }
  pageTitle = "";
  showFiller = false;
  ngOnInit(): void {

    this.keeper.pagename.subscribe(it => this.pageTitle = it);
  
  }
  


 
  
}
