import { MyButton } from "./../Button/Button.styles";
import { StyledTag } from "./../Tag/Tag.styles";
import styled from "styled-components";
import Card from "../Card/Card";

export const ReviewsWrapper = styled(Card)`
  max-height: auto;
  padding: 30px;
`;

export const ProductWrapper = styled(Card)`
  padding: 30px;
  margin-top: 30px;

  display: grid;
  grid-template-columns:
    [start] 70px [logoend] 30px [titlestart] calc(50% - 100px)
    [middle] 1fr [pricestart] auto [priceend] 40px [creditstart] auto [creditend] 40px [ratingstart] auto [end];
  @media screen and (max-width: 1320px) {
    grid-template-columns: 70px 5px auto 40px auto 40px 1fr;
    gap: 15px;
    grid-template-areas:
      "logo . title title title title title"
      "logo . tags tags tags tags tags "
      "price price price . credit . rating "
      "priceTitle priceTitle priceTitle . creditTitle . ratingTitle"
      "hr hr hr hr hr hr hr"
      "descriptions descriptions descriptions descriptions descriptions descriptions descriptions"
      "features features features features features features features"
      "advBlock advBlock advBlock advBlock advBlock advBlock advBlock"
      "hr2 hr2 hr2 hr2 hr2 hr2 hr2"
      "actions actions actions actions actions actions actions";
  }
  @media screen and (max-width: 940px) {
    grid-template-columns: 70px 5px 1fr;
    gap: 15px;
    grid-template-areas:
      "logo . title"
      "logo . tags"
      "priceTitle priceTitle price"
      "creditTitle creditTitle credit"
      "ratingTitle ratingTitle rating"
      "hr hr hr"
      "descriptions descriptions descriptions"
      "features features features"
      "advBlock advBlock advBlock "
      "hr2 hr2 hr2 "
      "actions actions actions ";
  }
  @media screen and (max-width: 480px) {
    padding: 20px;
    grid-template-columns: 1fr;
    gap: 15px;
    grid-template-areas:
      "logo"
      "title"
      "tags"
      "price"
      "priceTitle"
      "credit"
      "creditTitle"
      "rating"
      "ratingTitle"
      "hr"
      "descriptions"
      "features"
      "advBlock "
      "hr2"
      "actions";
  }
`;

export const Logo = styled.div`
  grid-column: start / logoend;
  grid-row: 1 / span 2;
  img {
    border-radius: 5px;
  }
  @media screen and (max-width: 1320px) {
    grid-area: logo;
  }
`;
export const TitleWrapper = styled.div`
  grid-column: titlestart / middle;
  align-self: flex-end;
  @media screen and (max-width: 1320px) {
    grid-area: title;
  }
`;
export const Price = styled.div`
  grid-column: pricestart / priceend;
  align-self: flex-end;
  font-size: 20px;
  line-height: 27px;
  white-space: nowrap;
  @media screen and (max-width: 1320px) {
    grid-area: price;
  }
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
  @media screen and (max-width: 1320px) {
    grid-area: credit;
  }
`;
export const RatingWrapper = styled.div`
  align-self: flex-end;
  grid-column: ratingstart / end;

  @media screen and (max-width: 1320px) {
    grid-area: rating;
  }
`;
export const Tags = styled.div`
  grid-column: titlestart / middle;
  ${StyledTag} {
    margin: 7px 5px 5px 0;
  }
  @media screen and (max-width: 1320px) {
    grid-area: tags;
  }
`;
export const PriceTitle = styled.div`
  grid-column: pricestart / priceend;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  @media screen and (max-width: 1320px) {
    grid-area: priceTitle;
  }
`;
export const CreditTitle = styled.div`
  grid-column: creditstart / creditend;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  @media screen and (max-width: 1320px) {
    grid-area: creditTitle;
  }
`;
export const RateTitle = styled.div`
  white-space: nowrap;
  grid-column: ratingstart / end;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  a {
    color: var(--primary);
  }
  @media screen and (max-width: 1320px) {
    grid-area: ratingTitle;
  }
`;
export const Descriptions = styled.div`
  grid-column: start / end;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
  @media screen and (max-width: 1320px) {
    grid-area: descriptions;
  }
`;
export const Features = styled.div`
  grid-column: start / middle;
  @media screen and (max-width: 1320px) {
    grid-area: features;
  }
`;
export const AdvantagesWrapper = styled.div`
  grid-column: middle / end;
  font-size: 16px;
  line-height: 22px;
  @media screen and (max-width: 1320px) {
    grid-area: advBlock;
  }
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
  @media screen and (max-width: 1320px) {
    grid-area: actions;
  }
`;

export const HrWrapper = styled.div`
  grid-column: start / end;
  @media screen and (max-width: 1320px) {
    grid-area: hr;
    hr {
      margin: 0;
    }
  }
`;
export const HrWrapper2 = styled.div`
  grid-column: start / end;
  @media screen and (max-width: 1320px) {
    grid-area: hr2;
    hr {
      margin: 0;
    }
  }
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
  @media screen and (max-width: 940px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 0px;
  }
`;
export const CharacteristicName = styled.span``;
export const CharacteristicValue = styled.span``;
export const CharacteristicDots = styled.span`
  border-bottom: 1px dotted var(--gray-light);
`;
