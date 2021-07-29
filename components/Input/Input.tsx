import { StyledInput } from './Input.styles';
import { InputProps } from './Input.props';



const Input = ({ ...props }: InputProps): JSX.Element => {
	return (
		<StyledInput {...props} />
	);
};

export default Input;
