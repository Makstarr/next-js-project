import { ReviewWrapper, UserName, DateWrapper, RatingWrapper, Description, Title } from './Review.styles';
import { ReviewProps } from './Review.props';
import UserIcon from './user.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Rating from '../Rating/Rating';

const Review = ({ review, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	const date = new Date(createdAt);
	const formatedDate = format(date, 'dd MMM yyyy', { locale: ru });
	return (
		<ReviewWrapper {...props}>
			<UserIcon />
			<Title>
				<UserName>{name}:</UserName>
				<span>{title}</span>
			</Title>
			<DateWrapper>
				{formatedDate}
			</DateWrapper>
			<RatingWrapper>
				<Rating rating={rating} />
			</RatingWrapper>
			<Description>
				{description}
			</Description>
		</ReviewWrapper>
	);
};

export default Review;
