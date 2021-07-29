import styled, { css } from "styled-components";
import { TagProps } from "./Tag.props";

export const StyledTag = styled.span<TagProps>`
  display: inline-block;

  box-sizing: border-box;
  margin-right: 5px;
  padding: 5px 10px;

  border-radius: 20px;

  ${(props) => {
    switch (props.size) {
      case "m":
        return css`
          font-size: 12px;
          line-height: 12px;
        `;
      case "l":
        return css`
          font-size: 14px;
        `;
    }
  }}
  ${(props) => {
    switch (props.color) {
      case "ghost":
        return css`
          border: 1px solid var(--gray-light);
        `;
      case "gray":
        return css`
          color: #fff;
          background: #83c0d9;

          font-weight: bold;
        `;
      case "green":
        return css`
          color: var(--green);
          background: var(--green-light);

          font-weight: bold;
        `;
      case "primary":
        return css`
          color: var(--primary);
          border: 1px solid var(--primary);
        `;
      case "red":
        return css`
          color: #fff;
          background: #de0000;

          font-weight: bold;
        `;
      default:
        "none";
    }
  }}
`;
