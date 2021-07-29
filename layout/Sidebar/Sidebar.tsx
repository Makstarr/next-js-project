import Menu from '../Menu/Menu';
import Search from '../../components/Search/Search';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import { SidebarWrapper } from './Sidebar.styles';


const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<SidebarWrapper {...props}>
			<Logo />
			<Search />
			<Menu />
		</SidebarWrapper>
	);
};

export default Sidebar;
