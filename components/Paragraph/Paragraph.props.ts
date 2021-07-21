import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  children: ReactNode;
  size: "s" | "m" | "l";
};
