import ButtonIcon from "./../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuClose = styled(ButtonIcon)`
  position: fixed;
  z-index: 11;
  top: 15px;
  right: 15px;
`;
export const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: #f5f6fb;
  overflow-y: scroll;
  padding: 15px;
`;
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 10px;
  padding: 15px 15px 0;

  @media (min-width: 756px) {
    display: none;
  }
`;
