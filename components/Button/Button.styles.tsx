import { motion } from 'framer-motion';
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.props";



export const MyButton = styled(motion.button) <ButtonProps>`
	display: inline-block;

	box-sizing: border - box;
	padding: 10px;

	cursor: pointer;

	transition: all 0.2s;
	text-align: center;

	border: none;
	border-radius: 5px;

	font-size: 14px;
  ${(props) =>
		props.appearance == "ghost" &&
		css`
      color: var(--black);
      border: 1px solid var(--gray-light);
      background: none;
   		&:hover {
				background: var(--gray-light)
			}
    `}
  ${(props) =>
		props.appearance == "primary" &&
		css`
      color: var(--white);
      background-color: var(--primary);
      	 &:hover {
				background: var(--primary-hover)
				}
    `}
`;


export const IconButton = styled.span< { arrow: ButtonProps["arrow"], appearance: ButtonProps["appearance"] } >`
   svg path{
    ${(props) => props.appearance === "primary" && css`fill: var(--white)`}
		${(props) => props.appearance == "ghost" && css`fill: var(--black)`}
		}
	${(props) =>
		props.arrow &&
		css`
				margin-left: 10px;
				display: inline-flex;
				align-items: center;
				transform: rotate(
					${props.arrow == "right" ? 0 : props.arrow == "down" ? 90 : 0}deg
				);
    `}

`;


