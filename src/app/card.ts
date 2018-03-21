
export class Card {
    constructor(
      public  name: string,
      public  cost: number,
      public  rarerity: number,
      public  life: number,
      public evoatk: number,
      public actor: string,
        public atk: number,
        public description: string,
        public evodescription: string,
        public id: string,
        public skilldescription: string,
        public tribe: string
    ) { }
    static jsonToCard(json: any): Card{
        return new Card(
            json['CardName'],
            json['Cost'],
            json['Rarity'],
            json['Life'],
            json['EvoAtk'],
            json['Actor'],
            json['Atk'],
            json['Description'],
            json['EvoDescription'],
            json['CardId'],
            json['SkillDescription'],
            json['TribeName']
        );
    }
  
}




