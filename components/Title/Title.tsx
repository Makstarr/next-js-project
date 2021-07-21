import React from 'react'
import { TitleProps } from './Title.props';
import { TitleH1, TitleH2, TitleH3 } from './Title.styles';

const Title = ({ tag, children }: TitleProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <TitleH1>
				{children}
			</TitleH1>;
		case 'h2':
			return <TitleH2>
				{children}
			</TitleH2>;
		case 'h3':
			return <TitleH3>
				{children}
			</TitleH3>;
		default:
			return <></>;
	}
};

export default Title;
