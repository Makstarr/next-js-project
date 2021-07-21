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
		</LayoutWrapper>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return <Layout>
			<Component {...props} />
		</Layout>;

	};
};
