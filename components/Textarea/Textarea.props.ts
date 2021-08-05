import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type TextareaProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { error?: FieldError };
