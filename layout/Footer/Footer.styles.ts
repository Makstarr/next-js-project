import styled from "styled-components";

export const MyFooter = styled.footer`
  background: var(--primary);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 40px;
  font-size: 16px;
  color: var(--white);
  align-items: center;
  padding: 20px 30px;
  @media (max-width: 756px) {
    justify-items: center;
    grid-template-columns: [linksStart] 1fr;
    padding: 30px 10px;
    gap: 20px;
  }
`;

export const Copy = styled.div``;

export const FooterLink = styled.a`
  display: block;
  &:hover {
    color: var(--gray-light);
  }
`;
