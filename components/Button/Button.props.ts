import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onAnimationStart" | "onDragStart" | "OnDragEnd" | "OnDrag" | "ref"
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down";
}
