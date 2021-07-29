import { SearchWrapper, StyledInput, StyledButton } from './Search.styles';
import { SearchProps } from './Search.props';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import SearchIcon from './search.svg';



const Input = ({ ...props }: SearchProps): JSX.Element => {
	const [value, setValue] = useState<string>("");
	const router = useRouter();
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			goToSearch();
		}
	};
	const goToSearch = () => {
		router.push({
			pathname: "search",
			query: {
				q: value
			}
		});
	};
	return (
		<SearchWrapper {...props}>
			<StyledInput value={value} placeholder="Поиск..." onChange={(e) => { setValue(e.target.value); }} onKeyDown={handleKeyDown}>
			</StyledInput>
			<StyledButton onClick={goToSearch} appearence="primary">
				<SearchIcon />
			</StyledButton>
		</SearchWrapper>
	);
};

export default Input;
