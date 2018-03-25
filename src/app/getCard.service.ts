import { Injectable } from '@angular/core';
import { Card } from './card';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Query } from './query';
@Injectable()
export class GetCardService {
    constructor(private http: Http) {
     }

     getCardQuery(query: Query): Observable<Card[]> {

        return   this.http.get('https://ifbv7znz0e.execute-api.ap-northeast-1.amazonaws.com/stage1/cards', { params:  { 
            id: query.id,
            type: query.type,
            cost: query.cost,
            cardset: query.cardset,
            rarity: query.rarity,
            clan: query.clan,
            name: query.name
        } })
           .map(
               responce => {
                   const obj = responce.json();
                   return obj.map(it => Card.jsonToCard(it))  || {};
               }
   
           ).
           catch(
               error => {
                   console.log(error);
                   return Observable.throw(error.statusText);
               }
           );
       }

 

    
 

}
