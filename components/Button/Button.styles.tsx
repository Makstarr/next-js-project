import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.props";



export const MyButton = styled.button<ButtonProps>`
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
		props.appearence == "ghost" &&
		css`
      color: var(--black);
      border: 1px solid var(--gray-light);
      background: none;
   		&:hover {
				background: var(--gray-light)
			}
    `}
  ${(props) =>
		props.appearence == "primary" &&
		css`
      color: var(--white);
      background-color: var(--primary);
      	 &:hover {
				background: var(--primary-hover)
				}
    `}
`;


export const ButtonIcon = styled.span< { arrow: ButtonProps["arrow"], appearence: ButtonProps["appearence"] } >`
   svg path{
    ${(props) => props.appearence === "primary" && css`fill: var(--white)`}
		${(props) => props.appearence == "ghost" && css`fill: var(--black)`}
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


