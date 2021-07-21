import { RatingProps } from "./Rating.props";
import styled, { css } from "styled-components";

export const StarIconWrapper = styled.span<{
  filled?: boolean;
  isEditable: RatingProps["isEditable"];
}>`
  display: inline-flex;
  align-items: center;
  ${(props) =>
    props.isEditable &&
    css`
      cursor: pointer;
    `}
  padding: 0 2px;
  &:first-of-type {
    padding-left: 0;
  }
  svg {
    transition: all 0.2s;
    ${(props) =>
      props.filled &&
      css`
        fill: var(--primary);
      `}
  }
`;
