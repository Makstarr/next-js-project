import { HrWrapper, HrWrapper2, Actions, AdvantagesWrapper, Disadvantages, Advantages, Descriptions, Features, TitleWrapper, Credit, CreditTitle, Logo, Price, PriceTitle, ProductWrapper, RateTitle, RatingWrapper, Tags, Characteristic, CharacteristicName, CharacteristicValue, CharacteristicDots, ReviewsWrapper } from './Product.styles';
import { ProductProps } from './Product.props';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import Devider from '../Devider/Devider';
import Tag from '../Tag/Tag';
import { priceRu, declOfNum } from '../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import Review from '../Review/Review';
import ReviewForm from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';



const Product = motion(forwardRef(({ product, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);
	const scrollToRewiev = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
	const variants = {
		visible: {
			opacity: 1,
			height: 'auto',
		},
		hidden: {
			overflow: 'hidden',
			height: 0,
			opacity: 0
		}
	};
	return (
		<div {...props} ref={ref} >
			<ProductWrapper>
				<Logo><Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width="70" height="70" /></Logo>
				<TitleWrapper>
					<Title tag="h3">{product.title}</Title>
				</TitleWrapper>
				<Price>{priceRu(product.price)}{product.oldPrice && <Tag color="green" size="m">{priceRu(product.price - product.oldPrice)}</Tag>}</Price>
				<Credit>{priceRu(product.credit)}<span>/мес</span></Credit>
				<RatingWrapper><Rating rating={product.reviewAvg ?? product.initialRating} /></RatingWrapper>
				<Tags>{product.categories.map(c => <Tag color="ghost" key={c}>{c}</Tag>)}</Tags>
				<PriceTitle>цена</PriceTitle>
				<CreditTitle>кредит</CreditTitle>
				<RateTitle>
					<a href="#ref"
						onClick={() => {
							scrollToRewiev();
						}}>
						{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></RateTitle>
				<HrWrapper><Devider /></HrWrapper>

				<Descriptions>{product.description}</Descriptions>
				<Features>
					{product.characteristics.map(c => <Characteristic key={c.name}>
						<CharacteristicName>
							<Title tag="h4">{c.name}</Title>
						</CharacteristicName>
						<CharacteristicDots />
						<CharacteristicValue>{c.value}</CharacteristicValue>
					</Characteristic>)}
				</Features>
				<AdvantagesWrapper>
					{product.advantages && <Advantages>
						<Title tag="h4">Преимущества</Title>
						<div>{product.advantages}</div>
					</Advantages>}
					{product.disadvantages && <Disadvantages>
						<Title tag="h4">Недостатки</Title>
						<div>{product.disadvantages}</div>
					</Disadvantages>
					}
				</AdvantagesWrapper>
				<HrWrapper2><Devider /></HrWrapper2>
				<Actions>
					<Button appearance="primary">Узнать подробнее</Button>
					<Button appearance="ghost" arrow={isReviewOpened ? 'down' : 'right'} onClick={() => { setIsReviewOpened(!isReviewOpened); }}>Читать отзывы</Button>
				</Actions>
			</ProductWrapper>
			<motion.div variants={variants} animate={isReviewOpened ? 'visible' : 'hidden'} initial={isReviewOpened ? 'visible' : 'hidden'}>
				<ReviewsWrapper color="blue" ref={reviewRef}>
					{product.reviews.map(r => <div key={r._id}> <Review review={r} /> <Devider /> </div>)}
					<ReviewForm productId={product._id} />
				</ReviewsWrapper>
			</motion.div>
		</div >
	);
}));

export default Product;
