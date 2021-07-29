import { MyButton } from "./../Button/Button.styles";
import { StyledTag } from "./../Tag/Tag.styles";
import styled from "styled-components";
import Card from "../Card/Card";

export const ProductWrapper = styled(Card)`
  padding: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns:
    [start] 70px [logoend] 30px [titlestart] calc(50% - 100px)
    [middle] 1fr [pricestart] auto [priceend] 40px [creditstart] auto [creditend] 40px [ratingstart] auto [end];
`;

export const Logo = styled.div`
  grid-column: start / logoend;
  grid-row: 1 / span 2;
  img {
    border-radius: 5px;
    width: 70px;
  }
`;
export const TitleWrapper = styled.div`
  grid-column: titlestart / middle;
  align-self: flex-end;
`;
export const Price = styled.div`
  grid-column: pricestart / priceend;
  align-self: flex-end;
  font-size: 20px;
  line-height: 27px;
  ${StyledTag} {
    margin-left: 5px;
  }
`;

export const Credit = styled.div`
  grid-column: creditstart / creditend;
  align-self: flex-end;
  font-size: 20px;
  line-height: 27px;
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
  }
`;
export const RatingWrapper = styled.div`
  align-self: flex-end;
  grid-column: ratingstart / end;
`;
export const Tags = styled.div`
  grid-column: titlestart / middle;
  ${StyledTag} {
    margin: 7px 5px 5px 0;
  }
`;
export const PriceTitle = styled.div`
  grid-column: pricestart / priceend;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
export const CreditTitle = styled.div`
  grid-column: creditstart / creditend;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
export const RateTitle = styled.div`
  grid-column: ratingstart / end;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
export const Descriptions = styled.div`
  grid-column: start / end;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
`;
export const Features = styled.div`
  grid-column: start / middle;
`;
export const AdvantagesWrapper = styled.div`
  grid-column: middle / end;
  font-size: 16px;
  line-height: 22px;
`;
export const Advantages = styled.div`
  &::before {
    content: "";
    background: var(--green);
    width: 2px;
    border-radius: 5px;
    height: 100%;
    position: absolute;
    left: 0;
  }
  position: relative;
  padding-left: 15px;
  margin-bottom: 20px;
`;

export const Disadvantages = styled.div`
  &::before {
    content: "";
    background: var(--red);
    width: 2px;
    border-radius: 5px;
    height: 100%;
    position: absolute;
    left: 0;
  }
  padding-left: 15px;
`;
export const Actions = styled.div`
  grid-column: start / end;
  ${MyButton} {
    margin-right: 20px;
  }
`;

export const HrWrapper = styled.div`
  grid-column: start / end;
`;

export const Characteristic = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-right: 60px;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 5px;
  align-items: baseline;
  gap: 10px;
  h4 {
    margin: 0;
  }
`;
export const CharacteristicName = styled.span``;
export const CharacteristicValue = styled.span``;
export const CharacteristicDots = styled.span`
  border-bottom: 1px dotted var(--gray-light);
`;
