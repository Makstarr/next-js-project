import { useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef } from 'react';
import { RatingProps } from './Rating.props';
import { RatingMessage, StarIconWrapper, RatingWrapper } from './Rating.styles';
import Star from './star.svg';

const Rating = forwardRef(({ rating, isEditable = false, setRating, error, ...props }: RatingProps, ref: ForwardedRef<HTMLSpanElement>): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const handleSpace = (i: number, e: KeyboardEvent<SVGTSpanElement>) => {
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
					key={i}
					isEditable={isEditable}
					filled={i < currentRating}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					ref={ref}
					error={error && error.message ? true : false}
				>
					<Star
						onKeyDown={(e: KeyboardEvent<SVGTSpanElement>) => isEditable && handleSpace(i + 1, e)}
						tabIndex={isEditable ? 0 : -1} />
				</StarIconWrapper >
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<RatingWrapper>
			<div {...props} >
				{ratingArray.map((item: JSX.Element) => item)}
			</div>
			{error && <RatingMessage>{error.message}</RatingMessage>}
		</RatingWrapper>
	);
});

export default Rating;
