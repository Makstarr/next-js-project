import { InputWrapper } from "./../Input/Input.styles";
import { ReviewFormProps } from "./ReviewForm.props";
import styled from "styled-components";
import { TextareaWrapper } from "../Textarea/Textarea.styles";
import { StyledInput } from "../Input/Input.styles";

export const ReviewFormWrapper = styled.div<ReviewFormProps>`
  font-size: 14px;
  line-height: 24px;
  display: grid;
  grid-template-columns: [start] auto 1fr auto [end];
  align-items: center;
  gap: 20px 30px;
  ${TextareaWrapper} {
    grid-column: start / end;
  }
  ${InputWrapper} {
    justify-self: flex-start;
  }
  @media (max-width: 1100px) {
    grid-template-columns: [start] 1fr 1fr [end];
    ${InputWrapper} {
      justify-self: unset;
    }
  }
  @media (max-width: 640px) {
    grid-template-columns: [start] 1fr [end];
  }
`;
export const RatingWrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: auto auto;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: flex-start;
    grid-column: start / end;
  }
`;
export const Info = styled.span`
  margin-left: 15px;
  @media (max-width: 1100px) {
    width: 100%;
    display: block;
    margin-left: 0;
    margin-top: 15px;
  }
`;
export const Icon = styled.div``;
export const Message = styled.div<{ type: "success" | "error" }>`
  margin-top: 20px;
  background: ${(props) =>
    props.type === "success" ? "var(--green-light)" : "var(--red-light)"};
  padding: 20px;
  border-radius: 5px;
  position: relative;
  ${Icon} {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  path {
    stroke: ${(props) =>
      props.type === "success" ? "var(--green)" : "var(--red)"};
  }
  h3 {
    margin: 0;
    margin-bottom: 10px;
  }
`;
export const Submit = styled.div`
  grid-column: start / end;
`;
