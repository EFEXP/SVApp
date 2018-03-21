import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../card';
import { GetCardService } from '../getCard.service';
// 103241010
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GetCardService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private getCard: GetCardService) { }
  title = 'app';
  responseTxt = 'NOOOOOOOOOOOOOOOOOOOOOOOOOOthing';
  imageUrl = 'https://s3-ap-northeast-1.amazonaws.com/shadowverse-photos/card/1012140200.jpg';

  msg = 1000110301;
  onSerchClick() {
    this.getCard.getCardByID(this.msg).subscribe(
      data => {
        console.log(data);
        console.log( data["CardId"]);
        this.responseTxt = data["CardName"];
        this.imageUrl = "https://s3-ap-northeast-1.amazonaws.com/shadowverse-photos/card/" + data["CardId"] + "0.jpg";
      }
    );
 
  }

}
