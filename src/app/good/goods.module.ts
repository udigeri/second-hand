import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './components/goods/goods.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsService } from './goods.service';



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
  ],
  providers: [GoodsService]
})
export class GoodsModule { }
