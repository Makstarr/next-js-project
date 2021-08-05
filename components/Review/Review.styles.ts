import { ReviewProps } from "./Review.props";
import styled from "styled-components";

export const ReviewWrapper = styled.div<ReviewProps>`
  display: grid;
  grid-template-columns: [start] auto 1fr auto auto [end];
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 24px;
  @media screen and (max-width: 890px) {
    grid-template-columns: [start] auto [titlestart] auto [dateend] 1fr 1fr [end];
  }
`;
export const UserName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;
export const Title = styled.div`
  @media screen and (max-width: 890px) {
    grid-column: titlestart / end;
  }
`;
export const DateWrapper = styled.div`
  margin-right: 10px;
  @media screen and (max-width: 890px) {
    grid-column: start / dateend;
  }
  @media screen and (max-width: 400px) {
    grid-column: start / end;
  }
`;
export const RatingWrapper = styled.div`
  @media screen and (max-width: 400px) {
    grid-column: start / end;
  }
`;
export const Description = styled.div`
  grid-column: start / end;
`;
