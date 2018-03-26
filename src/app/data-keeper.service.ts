import { Injectable, OnInit } from '@angular/core';
import { Card } from './card';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataKeeperService implements OnInit {
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
  type_items = [
    "フォロワー"
    , "アミュレット"
    , "カウントダウンアミュレット"
    , "スペル"
  ];
  rarity_items = [
    "ブロンズ"
    , "シルバー"
    , "ゴールド"
    , "レジェンド"
  ];
  cardset_dictionary = {
    "トークン": "90000",
    "ベーシックカード": "10000",
    "クラシックカードパック": "10001",
    "バハムート降臨": "10003",
    "ダークネス・エボルヴ": "10002",
    "ワンダーランド・ドリームズ": "10005",
    "神々の騒嵐": "10004",
    "星神の伝説": "10006",
    "時空転生": "10007",
    "構築済み第一弾": "70001",
    "構築済み第二弾": "70002"
  };
  card: Card = null;
  cardList: Card[] = null;
  pagename: Subject<string> = new Subject<string>();
  constructor() { }
  ngOnInit() {

  }

}
