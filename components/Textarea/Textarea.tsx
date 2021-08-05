import { StyledTextarea, TextareaWrapper, TextareaMessage } from './Textarea.styles';
import { TextareaProps } from './Textarea.props';
import { ForwardedRef, forwardRef } from 'react';



const Textarea = forwardRef(({ error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<TextareaWrapper>
			<StyledTextarea {...props} ref={ref} error={error} />
			{error && <TextareaMessage>{error.message}</TextareaMessage>}
		</TextareaWrapper>
	);
});

export default Textarea;
