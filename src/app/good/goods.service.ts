import { Injectable } from '@angular/core';
import { Goods } from './goods';

@Injectable()
export class GoodsService {

  public goods: Goods[] = [];

  constructor() {
    for(let i: number=1; i<=10; i++){
      this.goods.push(new Goods(1, `Good_${i}`, i, `Description_${i}`));
    } 
  }

  
}
