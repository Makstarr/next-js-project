import { HrWrapper, HrWrapper2, Actions, AdvantagesWrapper, Disadvantages, Advantages, Descriptions, Features, TitleWrapper, Credit, CreditTitle, Logo, Price, PriceTitle, ProductWrapper, RateTitle, RatingWrapper, Tags, Characteristic, CharacteristicName, CharacteristicValue, CharacteristicDots } from './Product.styles';
import { ProductProps } from './Product.props';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import Devider from '../Devider/Devider';
import Tag from '../Tag/Tag';
import { priceRu, declOfNum } from '../../helpers/helpers';
import Image from 'next/image';



const Product = ({ product }: ProductProps): JSX.Element => {
	return (
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
			<RateTitle>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</RateTitle>
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
				<Button appearence="primary">Узнать подробнее</Button>
				<Button appearence="ghost" arrow={"right"}>Читать отзывы</Button>
			</Actions>
		</ProductWrapper>
	);
};

export default Product;
