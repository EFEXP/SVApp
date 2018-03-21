import { Injectable } from '@angular/core';
import { Card } from './card';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class GetCardService {
    constructor(private http: Http) {
    

     }

    getCardByID(card_id: string|number): Observable<any> {
     return   this.http.get('https://yfiq92sjoh.execute-api.ap-northeast-1.amazonaws.com/release1', { params: { id: card_id} })
        .map(
            responce => {
                return responce.json() || {};
            }

        ).
        catch(
            error => {
                return Observable.throw(error.statusText);
            }
        );
    }

    
 

}
