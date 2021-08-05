import { TextareaProps } from "./Textarea.props";
import styled, { css } from "styled-components";

export const TextareaMessage = styled.span`
  position: absolute;
  bottom: -18px;
  left: 5px;
  font-size: 12px;
  color: var(--red);
`;
export const TextareaWrapper = styled.div`
  position: relative;
`;
export const StyledTextarea = styled.textarea<TextareaProps>`
  padding: 7px 15px;
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
  width: 100%;
  min-height: 100px;
  height: 100%;
  ${(props) =>
    props.error &&
    css`
      &:focus {
        border: 2px solid var(--red);
      }
      border: 2px solid var(--red);
    `}
`;
