import RateStar from './star.svg';
import { HHdataProps } from './HHdata.props';
import { HHblock, HHcount, HHnumber, HHrate, HHsalary, HHsalaryNumber, HHtitle } from './HHdata.styles';
import styled from 'styled-components';
import { priceRu } from '../../helpers/helpers';

const FilledStar = styled(RateStar)`
	circle{
		fill: #FC836D
	}
`;

const HHdata = ({ count, juniorSalary, middleSalary, seniorSalary }: HHdataProps): JSX.Element => {
	return (
		<HHblock>
			<HHcount color="white">
				<HHtitle>Всего ванкансий</HHtitle>
				<HHnumber>{count}</HHnumber>
			</HHcount>
			<HHsalary color="white">
				<div>
					<HHtitle>Начальный</HHtitle>
					<HHsalaryNumber>{priceRu(juniorSalary)}</HHsalaryNumber>
					<HHrate><FilledStar /><RateStar /><RateStar /></HHrate>
				</div>
				<div>
					<HHtitle>Средний</HHtitle>
					<HHsalaryNumber>{priceRu(middleSalary)}</HHsalaryNumber>
					<HHrate><FilledStar /><FilledStar /><RateStar /></HHrate>
				</div>
				<div>
					<HHtitle>Профессионал</HHtitle>
					<HHsalaryNumber>{priceRu(seniorSalary)}</HHsalaryNumber>
					<HHrate><FilledStar /><FilledStar /><FilledStar /></HHrate>
				</div>
			</HHsalary >

		</HHblock >
	);
};

export default HHdata;
