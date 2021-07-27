import CoursesIcon from './icons/courses.svg';
import ServisesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../interfaces/toppage.interface';
import { firstLevelMenuItem } from '../interfaces/menu.interface';



export const firstLevelMenu: firstLevelMenuItem[] = [
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

export const priceRu = (price: number): string => {
	return price.toLocaleString('ru') + ' ₽';
};