import { Component, OnInit } from '@angular/core';
import { Goods } from '../../goods';

@Component({
  selector: 'sh-goods-list',
  template: '<sh-goods [goods]="goods" *ngFor="let goods of goods"></sh-goods>',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit{
  public goods: Goods[] = [];

  constructor() {
    for(let i: number=1; i<=10; i++){
      this.goods.push(new Goods(1, `Good_${i}`, i, `Description_${i}`));
    }
  }

  ngOnInit(): void {
  }
}
