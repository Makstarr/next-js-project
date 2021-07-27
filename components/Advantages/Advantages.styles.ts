import styled from "styled-components";

export const AdvantageTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;

  align-self: center;
`;
export const Advantage = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 10px 40px;
  margin-bottom: 30px;
  hr {
    border: 1px solid var(--gray-light) !important;
  }
`;
