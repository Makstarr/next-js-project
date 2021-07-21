import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
	--black: #3B434E; 
	--white: #ffffff;
	--primary: #2c2525;
	--primary-hover: #000000;
	--red: #353535; 
	--green: #1DC47E;
	--green-light: #C8F8E4;
	--gray-light: #ededed;
	--font-family: "Noto Sans KR", sans-serif;
	--fontMed: 1.2rem;
	--fontSmall: 1rem;
}

html,
body {
	margin: 0;
	padding: 0;
	
	color: var(--black); 
	background: #F5F6F8;

	font-family: var(--font-family);
}

a {
	text-decoration: none;

	color: inherit;
}

* {
	box-sizing: border-box;
}

`;
