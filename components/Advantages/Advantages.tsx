import { AdvantagesProps } from './Advantages.props';
import { Advantage, AdvantageTitle } from './Advantages.styles';
import Icon from './advantage-icon.svg';
const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<Advantage key={a._id}>
					<Icon />
					<AdvantageTitle>{a.title}</AdvantageTitle>
					<hr />
					<div>{a.description}</div>
				</Advantage>
			))}
		</>
	);
};

export default Advantages;
