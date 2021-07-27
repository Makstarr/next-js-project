import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";
import { SortEnum } from "./Sort.props";
import styled, { css } from "styled-components";

export type SortProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  sort: SortEnum;
};

export const SortWrapper = styled.div<SortProps>`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`;
export const SortItem = styled.span<{ active: boolean }>`
  svg {
    display: none;
    margin-right: 8px;
  }
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: var(--primary);
      svg {
        fill: var(--primary);
        display: inline;
      }
    `}
`;
