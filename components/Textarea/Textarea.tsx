import { StyledTextarea } from './Textarea.styles';
import { TextareaProps } from './Textarea.props';



const Textarea = ({ ...props }: TextareaProps): JSX.Element => {
	return (
		<StyledTextarea {...props} />
	);
};

export default Textarea;
