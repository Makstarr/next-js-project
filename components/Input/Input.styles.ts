import { InputProps } from "./Input.props";
import styled, { css } from "styled-components";

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 7px 14px;
  color: var(--black);
  border: none;
  outline-color: var(--primary);
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 16px;
  line-height: 22px;
  font-family: var(--font-family);
  &::placeholder {
    color: var(--gray);
  }
  ${(props) =>
    props.error &&
    css`
      border: 2px solid var(--red);
    `}
`;

export const InputMessage = styled.span`
  position: absolute;
  bottom: -15px;
  left: 5px;
  font-size: 12px;
  color: var(--red);
`;
export const InputWrapper = styled.div`
  position: relative;
  padding-bottom: 5px;
`;
