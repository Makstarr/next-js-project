import { CardWrapper } from './Card.styles';
import { CardProps } from './Card.props';
import { ForwardedRef, forwardRef } from 'react';



const Card = forwardRef(({ color, children, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<CardWrapper color={color} {...props} ref={ref} >
			{children}
		</CardWrapper>
	);
});

export default Card;
