import { GoodsCategory } from "./goods-category";

export interface IGoodsData {
    id: number;
    name: string;
    category: GoodsCategory;
    price: number;
    description: string;
}
