import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCardService } from '../getCard.service';
import { Query } from '../query';
import { Card } from '../card';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {

  constructor(private getCard: GetCardService) { }
  @Output() searchFinished = new EventEmitter<Card[]>();
  query = new Query();
  serching = false;
  clan_items = [
    "ニュートラル"
    , "エルフ"
    , "ロイヤル"
    , "ウィッチ"
    , "ドラゴン"
    , "ネクロマンサー"
    , "ヴァンパイア"
    , "ビショップ"
    , "ネメシス"
  ];
  //1から
  type_items = [
    "フォロワー"
    , "アミュレット"
    , "カウントダウンアミュレット"
    , "スペル"
  ];
  //1から
  rarity_items = [
    "ブロンズ",
    , "シルバー"
    , "ゴールド"
    , "レジェンド"
  ];

  cardset_dictionary = new Map<string, string>();
  cardset_items = [
    "トークン"
    , "ベーシックカード"
    , "クラシックカードパック"
    , "ダークネス・エボルヴ"
    , "バハムート降臨"
    , "神々の騒嵐"
    , "ワンダーランド・ドリームズ"
    , "星神の伝説"
    , "時空転生"
    , "構築済み第一弾"
    , "構築済み第二弾"

  ];

  ngOnInit(): void {
    this.cardset_dictionary.set("トークン", "90000");
    this.cardset_dictionary.set("ベーシックカード", "10000");
    this.cardset_dictionary.set("クラシックカードパック", "10001");
    this.cardset_dictionary.set("バハムート降臨", "10003");
    this.cardset_dictionary.set("ダークネス・エボルヴ", "10002");
    this.cardset_dictionary.set("ワンダーランド・ドリームズ", "10005");
    this.cardset_dictionary.set("神々の騒嵐", "10004");
    this.cardset_dictionary.set("星神の伝説", "10006");
    this.cardset_dictionary.set("時空転生", "10007");
    this.cardset_dictionary.set("構築済みⅠ", "70001");
    this.cardset_dictionary.set("構築済みⅡ・エボルヴ再録", "70002");
  }

  onSerchClick() {
    this.serching = true;
    console.log(this.query);
    this.getCard.getCardQuery(this.query).subscribe(
      data => {
        console.log(data);
        this.searchFinished.emit(data);
        this.serching = false;
      }
    );

  }
}
