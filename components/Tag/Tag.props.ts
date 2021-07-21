import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type TagProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
  size?: "m" | "l";
  color: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
};
