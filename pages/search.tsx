import axios from 'axios';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
const Search = ({
	menu,
	firstCategory
}: HomeProps): JSX.Element => {


	return (
		<div>
			search
		</div>
	);
};





export default withLayout(Search);


export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

type HomeProps = {
	menu: MenuItem[],
	firstCategory: number
};