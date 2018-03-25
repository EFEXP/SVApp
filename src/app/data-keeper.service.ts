import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable()
export class DataKeeperService {
  card : Card = null;

  constructor() { }

}
