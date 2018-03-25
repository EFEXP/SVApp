import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../card';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  showFiller = false;
  title = 'app';
}
