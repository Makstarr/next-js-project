import { StyledInput, InputWrapper, InputMessage } from './Input.styles';
import { InputProps } from './Input.props';
import { ForwardedRef, forwardRef } from 'react';



const Input = forwardRef(({ error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<InputWrapper>
			<StyledInput {...props} ref={ref} error={error} />
			{error && <InputMessage>{error.message}</InputMessage>}
		</InputWrapper>

	);
});

export default Input;
