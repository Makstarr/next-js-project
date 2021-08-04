import styled from "styled-components";

export const PageWrapper = styled.div``;
export const SeoText = styled.div`
  h1 {
    font-size: 26px;
    font-weight: 500;
    font-style: normal;
    line-height: 35px;
    margin: 0;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    line-height: 30px;
    margin: 20px 0 20px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    line-height: 27px;
    margin: 0;
  }
`;

export const PageTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: start;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 940px) {
    grid-template-columns: auto 1fr;
  }
  margin-bottom: 30px;
`;
