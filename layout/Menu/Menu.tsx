import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { MenuFirstLevel, MenuThirdLevelLink, MenuSecondBlock, MenuSecondLevel, MenuThirdLevel, MenuThirdLevelBlock, MenuWrapper } from './Menu.styles';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();
	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto',
		},
		hidden: {
			overflow: 'hidden',
			height: 0,
			opacity: 0
		}
	};
	const variants = {
		visible: {
			marginBottom: 20,

			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			overflow: 'hidden',

			marginBottom: 0,

		}
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			else {
				m.isOpened = false;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.id}>
						<Link href={`/${m.route}`}>
							<a>
								<MenuFirstLevel active={firstCategory === m.id}>
									{m.icon}
									<span>
										{m.name}
									</span>
								</MenuFirstLevel>
							</a>
						</Link>
						{firstCategory === m.id && buildSecondLevel(m)}
					</div>
				))
				}
			</ >);
	};

	const buildSecondLevel = (firstLevelMenuItem: firstLevelMenuItem) => {
		return (
			<MenuSecondBlock>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory} onClick={() => { openSecondLevel(m._id.secondCategory); }}>
							<MenuSecondLevel>
								{m._id.secondCategory}
							</MenuSecondLevel>
							<motion.div layout variants={variants} initial={m.isOpened ? 'visible' : 'hidden'} animate={m.isOpened ? 'visible' : 'hidden'}>
								{buildThirdLevel(m.pages, firstLevelMenuItem.route)}
							</motion.div>
						</div>);
				}
				)}
			</MenuSecondBlock>);
	};
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (

			<MenuThirdLevel>
				{pages.map(p => <motion.div key={p.alias} variants={variantsChildren}>
					<Link href={`/${route}/${p.alias}`}>
						<MenuThirdLevelLink active={`/${route}/${p.alias}` === router.asPath}>{p.title}</MenuThirdLevelLink>
					</Link>
				</motion.div>
				)}
			</MenuThirdLevel>);
	};
	return (
		<MenuWrapper>
			{buildFirstLevel()}
		</MenuWrapper>
	);
};

export default Menu;
