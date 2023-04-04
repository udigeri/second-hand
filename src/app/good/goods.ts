import { GoodsCategory } from "./export/goods-category";
import { IGoodsData } from "./export/goods-data";

export class Goods {
    constructor(
        public id: number,
        public name: string,
        public category: GoodsCategory,
        public price: number,
        public description: string)
      {  }

    public static fromJson(data: IGoodsData): Goods {
      return new Goods(data.id, data.name, data.category, data.price, data.description);
    }
}
