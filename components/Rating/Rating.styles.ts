import { RatingProps } from "./Rating.props";
import styled, { css } from "styled-components";
import { FieldError } from "react-hook-form";

export const RatingWrapper = styled.div`
  position: relative;
`;
export const RatingMessage = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  color: var(--red);
`;

export const StarIconWrapper = styled.span<{
  filled?: boolean;
  isEditable: RatingProps["isEditable"];
  error?: boolean;
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
    stroke: ${(props) => props.error && "var(--red)"};
    ${(props) =>
      props.filled &&
      css`
        fill: var(--primary);
      `};
  }
`;
