import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const Content = styled.main`
  grid-area: body;
  @media (max-width: 756px) {
    padding: 0 15px;
  }
`;
export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 230px minmax(320px, 1200px) auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 40px 30px;
  grid-template-areas:
    " . header header ."
    " . sidebar body ."
    " footer footer footer footer";
  @media (max-width: 756px) {
    gap: 10px;
    grid-template-areas:
      "  header "
      "  body "
      "  footer";
    grid-template-columns: minmax(320px, 1200px);
  }
`;
export const StyledHeader = styled(Header)`
  grid-area: header;
`;
export const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  @media (max-width: 756px) {
    display: none;
  }
`;
export const StyledFooter = styled(Footer)`
  grid-area: footer;
`;
