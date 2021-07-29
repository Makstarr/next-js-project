import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
const Home = ({
	menu,
	firstCategory
}: HomeProps): JSX.Element => {
	const [counter, setCounter] = useState<number>(0);
	const [ratng, setRating] = useState<number>(4);

	useEffect(() => {
		console.log(counter);
		return () => {
			console.log("unmaunted");
		};
	}, [counter]);

	return (
		<div>
			<Title tag="h1">{counter}</Title>
			<Title tag="h2">sakdasdm</Title>
			<Title tag="h3">sakdasdm</Title>
			<Paragraph size="m">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio totam ipsa aspernatur aut modi incidunt commodi recusandae consequuntur ratione iusto eligendi tempora nam omnis esse dolore tenetur ipsum, reprehenderit ex!</Paragraph>
			<Paragraph size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro, voluptate, nam beatae dolores cum provident ducimus repudiandae officiis facilis nesciunt repellendus omnis rem quisquam ex ipsum. Voluptate, tenetur consequuntur.</Paragraph>
			<Paragraph size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore voluptas, temporibus beatae voluptatem quibusdam, vero maxime culpa, ipsam doloremque atque voluptates? Eum, quidem architecto ab in laboriosam porro dolorem.</Paragraph>
			<Button appearence='ghost' onClick={() => console.log('click')}> Привет </Button>
			<Button appearence='primary' arrow="right"> Пока </Button>
			<Button appearence='primary' arrow="down" onClick={() => setCounter(counter + 1)}> Пока </Button>
			<Tag size="l" color="gray" href="#">Lorem</Tag>
			<Tag size="l" color="green">Lorem</Tag>
			<Tag size="l" color="primary">{counter}</Tag>
			<Tag color="red">Lorem</Tag>
			<Tag color="ghost">Lorem</Tag>
			<Rating rating={ratng} />
			<Rating rating={ratng} isEditable setRating={setRating} />
			<Input />
		</div>
	);
};





export default withLayout(Home);


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