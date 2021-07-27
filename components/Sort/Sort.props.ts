import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export enum SortEnum {
  Rating,
  Price,
}
export type SortProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
};
