import { TopPageComponentProps } from './TopPage.component.props';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
	return (
		<div>
			{products && products.length}
		</div>
	);
};

export default TopPageComponent;
