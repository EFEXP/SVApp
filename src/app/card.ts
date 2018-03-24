
export class Card {
    constructor(
        public name: string,
        public cost: number,
        public rarerity: number,
        public life: number,
        public evoatk: number,
        public actor: string,
        public atk: number,
        public description: string,
        public evodescription: string,
        public id: string,
        public skilldescription: string,
        public evoskilldescription: string,
        public tribe: string
    ) { }
    static jsonToCard(json: any): Card {
        return new Card(
            json['card_name'],
            json['cost'],
            json['rarity'],
            json['life'],
            json['evo_atk'],
            json['actor'],
            json['atk'],
            json['description'],
            json['evo_description'],
            json['card_id'],
            json['skill_disc'],
            json['evo_skill_disc'],
            json['tribe_name']
        );
    }

}




