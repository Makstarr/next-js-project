import axios from 'axios';
import { GetStaticProps } from 'next';
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
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
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