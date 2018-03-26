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
    "90000": "トークン",
    "10000": "ベーシックカード",
    "10001": "クラシックカードパック",
    "10003": "バハムート降臨",
    "10002": "ダークネス・エボルヴ",
    "10005": "ワンダーランド・ドリームズ",
    "10004": "神々の騒嵐",
    "10006": "星神の伝説",
    "10007": "時空転生",
    "70001": "構築済みⅠ",
    "70002": "構築済みⅡ"
  };
  card: Card = null;
  cardList: Card[] = null;
  pagename: Subject<string> = new Subject<string>();
  constructor() { }
  ngOnInit(){

  }

}
