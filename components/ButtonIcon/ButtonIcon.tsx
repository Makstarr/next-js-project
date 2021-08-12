import React from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import { MyButton } from './ButtonIcon.styles';

const Button: React.FC<ButtonIconProps> = ({
	icon, appearance, ...props }): JSX.Element => {
	const IconComponent = icons[icon];
	return (
		<MyButton appearance={appearance}{...props}>
			<IconComponent />
		</MyButton>
	);
};

export default Button;
