import { CardWrapper } from './Card.styles';
import { CardProps } from './Card.props';



const Card = ({ color, children, ...props }: CardProps): JSX.Element => {
	return (
		<CardWrapper color={color} {...props}>
			{children}
		</CardWrapper>
	);
};

export default Card;
