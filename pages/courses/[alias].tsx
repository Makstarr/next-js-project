import axios from 'axios';
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useState, useEffect } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { TopPageModel } from '../../interfaces/toppage.interface';
import { withLayout } from '../../layout/Layout';

const firstCategory = 0;

const Courses = ({
	menu, page, products
}: CoursesProps): JSX.Element => {
	return (
		<div>
			{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
		</div>
	);
};



export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
		firstCategory
	});
	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<CoursesProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
		firstCategory
	});
	const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias);
	const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/", {
		category: page.category,
		limit: 10
	});
	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};

type CoursesProps = {
	menu: MenuItem[],
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
};