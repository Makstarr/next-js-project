import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
  color: "white" | "blue";
};
