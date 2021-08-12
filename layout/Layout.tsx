import Up from '../components/Up/Up';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { LayoutProps } from './Layout.props';
import { Content, LayoutWrapper, StyledFooter, StyledHeader, StyledSidebar } from './Layout.styles';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<LayoutWrapper>
			<StyledHeader />
			<StyledSidebar />
			<Content>
				{children}
			</Content>
			<StyledFooter />
			<Up />
		</LayoutWrapper>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
			<Layout>
				<Component {...props} />
			</Layout></AppContextProvider >;

	};
};
