import { ProductModel } from "./../../interfaces/product.interface";
import { TopPageModel } from "./../../interfaces/toppage.interface";

export type TopPageComponentProps = {
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
};
