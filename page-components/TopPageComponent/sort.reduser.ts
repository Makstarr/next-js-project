import { SortActions } from "./sort.reduser";
import { ProductModel } from "./../../interfaces/product.interface";
import { SortEnum } from "../../components/Sort/Sort.props";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };
export interface SortReduserState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReduser = (
  state: SortReduserState,
  action: SortActions
): SortReduserState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort(
          (a, b) => a.initialRating - b.initialRating
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => -a.price + b.price),
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};
