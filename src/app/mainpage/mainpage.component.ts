import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  cardList: Card[] = null;
  constructor() { }

  ngOnInit() {
  }

}
