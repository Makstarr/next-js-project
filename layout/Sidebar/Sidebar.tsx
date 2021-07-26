import Menu from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import { SidebarWrapper } from './Sidebar.styles';


const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<SidebarWrapper {...props}>
			<Logo />
			<div>поиск</div>
			<Menu />
		</SidebarWrapper>
	);
};

export default Sidebar;
