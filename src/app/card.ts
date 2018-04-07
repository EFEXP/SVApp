import { DataKeeperService } from "./data-keeper.service";

export class Card {
    static   cardset_items = [
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
      static  clan_items = [
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
      static   type_items = [
        "フォロワー"
        , "アミュレット"
        , "カウントダウンアミュレット"
        , "スペル"
      ];
      //1から
      static    rarity_items = [
        "ブロンズ"
        , "シルバー"
        , "ゴールド"
        , "レジェンド"
      ];
      static   cardset_dictionary = {
        "90000": "トークン",
        "10000": "ベーシックカード",
        "10001": "クラシックカードパック",
        "10003": "バハムート降臨",
        "10002": "ダークネス・エボルヴ",
        "10005": "ワンダーランド・ドリームズ",
        "10004": "神々の騒嵐",
        "10006": "星神の伝説",
        "10007": "時空転生",
        "10008": "起源の光、終焉の闇",
        "70001": "構築済みⅠ",
        "70002": "構築済みⅡ"
      };
   constructor(
        public name: string,
        public cost: number,
        public rarity: string,
        public life: number,
        public evoatk: number,
        public actor: string,
        public atk: number,
        public description: string,
        public evodescription: string,
        public id: string,
        public skilldescription: string,
        public evoskilldescription: string,
        public tribe: string,
        public card_set: string,
        public clan: string,
        public type: string
    ) { }
    static jsonToCard(json: any): Card {
        return new Card(
            json['card_name'],
            json['cost'],
            this.rarity_items[ (json['rarity']as number) - 1 ],
            json['life'],
            json['evo_atk'],
            json['actor_name'],
            json['atk'],
            json['description'],
            json['evo_description'],
            json['card_id'],
            json['skill_disc'],
            json['evo_skill_disc'],
            json['tribe_name'],
            this.cardset_dictionary[json['card_set_id']],
            this.clan_items[json['clan']],
            this.type_items [(json['char_type'] as number) - 1 ],
        );
    }

}




