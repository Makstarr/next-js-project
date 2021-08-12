import styled, { css } from "styled-components";
import { ButtonIconProps } from "./ButtonIcon.props";

export const MyButton = styled.button<ButtonIconProps>`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background: var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: none;
  &:hover {
    background: var(--primary-hover);
  }
  ${(props) =>
		props.appearance == "primary" &&
		css`
      background-color: var(--primary);
      &:hover {
        background: var(--primary-hover);
      }
      svg * {
        fill: var(--white);
      }
    `}
  ${(props) =>
		props.appearance == "white" &&
		css`
      background-color: var(--white);
      svg * {
        fill: var(--primary);
      }
      &:hover {
        background: var(--primary);
        svg * {
          fill: var(--white);
        }
      }
    `}
`;
