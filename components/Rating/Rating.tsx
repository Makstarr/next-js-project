import { useEffect, useState, keyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import { StarIconWrapper } from './Rating.styles';
import Star from './star.svg';

const Rating = ({ rating, isEditable = false, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const handleSpace = (i: number, e: keyboardEvent<SVGTSpanElement>) => {

		if (e.code != "Space" || !setRating) {
			return;
		}
		setRating(i);
	};
	const onClick = (i: number) => {
		if (setRating) {
			setRating(i);
		}
	};
	const changeDisplay = (i: number) => {
		if (isEditable) {
			constructRating(i);
		}
	};
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIconWrapper
					isEditable={isEditable}
					filled={i < currentRating} key={i}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}

				>
					<Star
						onKeyDown={(e: keyboardEvent<SVGTSpanElement>) => isEditable && handleSpace(i + 1, e)}
						tabIndex={isEditable ? 0 : -1} />
				</StarIconWrapper >
			);
		});
		setRatingArray(updatedArray);
	};


	return (
		<div {...props}>
			{ratingArray.map((item: JSX.Element) => item)}
		</div>
	);
};

export default Rating;
