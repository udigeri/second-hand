import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goods } from '../../goods';
import { GoodsService } from '../../goods.service';

@Component({
  selector: 'sh-goods-list',
  template: '<sh-goods [goods]="goods" *ngFor="let goods of goods"></sh-goods>',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit{
  public goods: Goods[] = [];

  constructor(
    private _goodsService: GoodsService
  ) {
    this._goodsService.getGoods().subscribe(
      (data: Goods[]) => this.goods = data
    );
  }

  ngOnInit(): void {
  }
}
