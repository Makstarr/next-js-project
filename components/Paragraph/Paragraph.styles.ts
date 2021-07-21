import { ParagraphProps } from "./Paragraph.props";
import styled from "styled-components";

export const P = styled.p<ParagraphProps>`
  margin: 0;

  font-size: ${(props) => {
    switch (props.size) {
      case "s":
        return "14px";
      case "m":
        return "16px";
      case "l":
        return "18px";
    }
  }};
`;
