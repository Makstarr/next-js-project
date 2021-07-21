import { P } from './Paragraph.styles';
import { ParagraphProps } from './Paragraph.props';



const Paragraph = ({ size, children }: ParagraphProps): JSX.Element => {
	return (
		<P size={size}>
			{children}
		</P>
	);
};

export default Paragraph;
