import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './components/goods/goods.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';



@NgModule({
  declarations: [
    GoodsComponent,
    GoodsListComponent
  ],
  exports: [
    GoodsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GoodsModule { }
