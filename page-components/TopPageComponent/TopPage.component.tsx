
import { useEffect, useReducer } from 'react';
import Advantages from '../../components/Advantages/Advantages';
import HHdata from '../../components/HHdata/HHdata';
import Paragraph from '../../components/Paragraph/Paragraph';
import Product from '../../components/Product/Product';
import Sort from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import Tag from '../../components/Tag/Tag';
import Title from '../../components/Title/Title';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import { sortReduser } from './sort.reduser';
import { TopPageComponentProps } from './TopPage.component.props';
import { PageTitle, PageWrapper, SeoText } from './TopPage.component.styles';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReduser, { products, sort: SortEnum.Rating });
	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	useEffect(() => {
		dispatchSort({ type: 'reset', initialState: products });
	}, [products]);

	return (
		<PageWrapper>
			<PageTitle>
				<Title tag="h1"> {page.title} </Title>
				{sortedProducts && <Tag color="gray" size="l">{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</PageTitle>
			<div>
				{sortedProducts && products.map(p => (<Product key={p._id} product={p} />))}
			</div>

			{firstCategory === TopLevelCategory.Courses && page.hh && < HHdata category={page.category} {...page.hh} />}
			{page.advantages && page.advantages.length > 0 &&
				<>
					<Title tag="h2"> Преимущества </Title>
					<Advantages advantages={page.advantages} />
				</>}
			{page.seoText && <SeoText dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Title tag="h2"> Получаемые навыки </Title>
			{page.tags.map(t => <Tag color="primary">{t}</Tag>)}
		</PageWrapper>
	);
};

export default TopPageComponent;
