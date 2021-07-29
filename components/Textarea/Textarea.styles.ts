import { TextareaProps } from "./Textarea.props";
import styled from "styled-components";

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
`;
