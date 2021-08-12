import { UpWrapper } from './Up.styles';
import { useScrollY } from '../../hooks/useScrollY';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();
	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);


	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<UpWrapper animate={controls} initial={{ opacity: 0 }}>
			<ButtonIcon icon="up" onClick={scrollToTop} appearance="primary" />
		</UpWrapper>
	);
};

export default Up;
