import { ProductModel } from "../../interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ProductProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  product: ProductModel;
};
