import { StyledTag } from "./Tag.styles";
import { TagProps } from "./Tag.props";

const Tag = ({
	size = "m",
	children,
	color = "ghost",
	href,
	...props
}: TagProps): JSX.Element => {
	if (href) {
		return (
			<a href={href}>
				<StyledTag size={size} color={color} {...props}>
					{children}
				</StyledTag>
			</a>
		);
	}
	return (
		<StyledTag size={size} color={color} {...props}>
			{children}
		</StyledTag>
	);
};

export default Tag;
