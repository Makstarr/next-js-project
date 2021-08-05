import { ReviewModel } from "./../../interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ReviewProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  review: ReviewModel;
};
