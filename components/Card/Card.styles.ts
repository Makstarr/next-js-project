import { CardProps } from "./Card.props";
import styled from "styled-components";

export const CardWrapper = styled.div<CardProps>`
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  background: ${(props) => {
    switch (props.color) {
      case "white":
        return "var(--white);";
      case "blue":
        return "#f9f8ff";
      default:
        return "var(--white);";
    }
  }};
`;
