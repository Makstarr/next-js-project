import { HhData } from "./../../interfaces/toppage.interface";
import styled from "styled-components";
import Card from "../Card/Card";

export const HHblock = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const HHcount = styled(Card)`
  padding: 20px;
  text-align: center;
`;

export const HHsalary = styled(Card)`
  display: grid;
  padding: 20px;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  & > div {
    border-right: 1px solid var(--gray-light);
    &:last-child {
      border-right: none;
    }
  }
  @media (max-width: 640px) {
    gap: 30px;
    grid-template-columns: 1fr;
    & > div {
      padding: 0 0 30px;
      border-right: none;
      border-bottom: 1px solid var(--gray-light);
      &:last-child {
        border-bottom: none;
        padding: 0 0 10px;
      }
    }
  }
`;

export const HHtitle = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
`;

export const HHnumber = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  color: var(--primary);
`;
export const HHsalaryNumber = styled.div`
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 12px;
`;
export const HHrate = styled.div`
  display: grid;
  grid-template-columns: 20px 20px 20px;
  justify-content: center;
  gap: 10px;
`;
