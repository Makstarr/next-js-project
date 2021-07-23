import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServisesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import { P } from '../../components/Paragraph/Paragraph.styles';
import { MenuFirstLevel, MenuFirstLevelLink, MenuSecondBlock, MenuSecondCategory, MenuSecondLevel, MenuSecondLevelBlock, MenuThirdLevel, MenuThirdLevelBlock, MenuWrapper } from './Menu.styles';
import { eachDayOfInterval } from 'date-fns/esm';


const firsLevelMenu: firstLevelMenuItem[] = [
	{
		route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses
	},
	{
		route: 'servises', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevelCategory.Services
	},
	{
		route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books
	},
	{
		route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products
	}


];

const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firsLevelMenu.map((m) => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<MenuFirstLevel active={firstCategory === m.id}>
								{m.icon}
								<span>
									{m.name}
								</span>
							</MenuFirstLevel>
						</a>
						{firstCategory === m.id && buildSecondLevel(m)}
					</div>
				))
				}
			</ >);
	};

	const buildSecondLevel = (firstLevelMenuItem: firstLevelMenuItem) => {
		return (
			<MenuSecondBlock>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<MenuSecondLevel>
							{m._id.secondCategory}
						</MenuSecondLevel>
						<MenuThirdLevelBlock open={m.isOpened === true}>
							{buildThirdLevel(m.pages, firstLevelMenuItem.route)}
						</MenuThirdLevelBlock>
					</div>
				))}
			</MenuSecondBlock>);
	};
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<MenuThirdLevel active={true}>
				{pages.map(p => <a href={`/${route}/${p.alias}`}>{p.title}</a>)}
			</MenuThirdLevel>);
	};
	return (
		<MenuWrapper>
			{buildFirstLevel()}
		</MenuWrapper>
	);
};

export default Menu;
