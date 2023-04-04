import { Component, Input, OnInit } from '@angular/core';
import { Goods } from '../../goods';

@Component({
  selector: 'sh-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit{
  @Input()
  public goods: Goods;

  constructor() {
    this.goods = new Goods(1, "muj1", 10, "Description");
  }

  ngOnInit(): void{
  }

  public get id(): number{
    return this.goods.id
  }

  public get name(): string{
    return this.goods.name
  }

  public get price(): number{
    return this.goods.price
  }

  public get description(): string{
    return this.goods.description
  }
}
