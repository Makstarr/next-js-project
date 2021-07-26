import styled, { css } from "styled-components";

export const MenuWrapper = styled.nav``;
export const MenuFirstLevel = styled.div<{ active: boolean }>`
  margin-top: 20px;
  ${(props) =>
    props.active &&
    css`
      color: var(--primary);
      svg {
        fill: var(--primary);
      }
    `}
  &:hover {
    color: var(--primary);
    svg {
      fill: var(--primary);
    }
  }
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 20px;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`;

export const MenuSecondBlock = styled.div`
  margin-left: 12px;
  margin-top: 15px;
  padding-left: 32px;

  border-left: 1px solid #dfdfdf;
`;
export const MenuSecondLevel = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--gray-dark);
  font-size: 12px;
  font-weight: 30px;
  &:hover {
    color: var(--primary);
    svg {
      fill: var(--primary);
    }
  }
`;
export const MenuThirdLevelBlock = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  padding-bottom: 20px;
`;

export const MenuThirdLevel = styled.div``;

export const MenuThirdLevelLink = styled.a<{ active: boolean }>`
  color: var(--gray-dark);
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  ${(props) =>
    props.active &&
    css`
      color: var(--primary);
      svg {
        fill: var(--primary);
      }
    `}
  &:hover {
    color: var(--primary);
    svg {
      fill: var(--primary);
    }
  }
`;
