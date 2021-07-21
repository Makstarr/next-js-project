import { FooterProps } from './Footer.props';
import { Copy, FooterLink, Links, MyFooter } from './Footer.styles';
import { format } from 'date-fns'


const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<MyFooter {...props}>
			<Copy>My-Store 2020 - {format(new Date(), 'yyyy')} © Все права защищены</Copy>

			<FooterLink href="#">Пользовательское соглашение</FooterLink>
			<FooterLink href="#">Политика конфиденциальности</FooterLink>

		</ MyFooter>
	);
};

export default Footer;
