import { SortEnum, SortProps } from './Sort.props';
import { SortItem, SortWrapper } from './Sort.styles';
import SortIcon from './sort.svg';


const Sort = ({ sort, setSort, ...props }: SortProps): JSX.Element => {
	return (
		<SortWrapper sort={sort} {...props}>
			<SortItem
				onClick={() => { setSort(SortEnum.Rating); }}
				active={sort === SortEnum.Rating}>
				<SortIcon />
				По рейтингу
			</SortItem >
			<SortItem
				onClick={() => { setSort(SortEnum.Price); }}
				active={sort === SortEnum.Price}>
				<SortIcon />
				По цене
			</SortItem >
		</SortWrapper >

	);
};

export default Sort;
