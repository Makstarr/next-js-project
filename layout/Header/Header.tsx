import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Logo from '../logo.svg';
import Sidebar from '../Sidebar/Sidebar';
import { StyledHeader, MobileMenuWrapper, MenuClose } from './Header.styles';
// import { HeaderProps } from './Header.props';



const Header = (): JSX.Element => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		setMenuOpen(false);
	}, [router]);
	const variants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		hidden: {
			opacity: 0,
			x: '100%'
		}
	};
	return (
		<StyledHeader>
			<Logo />
			<ButtonIcon
				appearance="white"
				icon="menu"
				onClick={() => {
					setMenuOpen(true);
				}} />
			<MobileMenuWrapper animate={menuOpen ? 'visible' : 'hidden'} variants={variants} initial="hidden">
				<Sidebar />
				<MenuClose
					icon="close"
					appearance="white"
					onClick={() => {
						setMenuOpen(false);
					}} />
			</MobileMenuWrapper>
		</StyledHeader>
	);
};

export default Header;
