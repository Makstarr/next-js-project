import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { TopPageModel } from '../../interfaces/toppage.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';
import TopPageComponent from '../../page-components/TopPageComponent/TopPage.component';

const TopPage = ({
	page, products, firstCategory, menu
}: TopPageProps): JSX.Element => {
	return <TopPageComponent page={page} products={products} firstCategory={firstCategory} />;
};



export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
			firstCategory: m.id
		});
		if (menu.length != 0) {
			paths = paths.concat(menu.flatMap(item => item.pages.map(p => `/${m.route}/${p.alias}`)));
		}
	}
	console.log(paths);
	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	try {
		const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
			firstCategory: firstCategoryItem.id
		});
		if (menu.length === 0) {
			return {
				notFound: true
			};
		}
		const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias);
		const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/", {
			category: page.category,
			limit: 10
		});
		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products
			}
		};
	}
	catch (e) {
		console.error(e);
		return {
			notFound: true
		};
	}
};

type TopPageProps = {
	menu: MenuItem[],
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
};