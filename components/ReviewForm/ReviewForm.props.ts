import { ReviewModel } from "../../interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ReviewFormProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  productId: string;
};
