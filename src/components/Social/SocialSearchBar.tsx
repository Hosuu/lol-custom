import { FC, useEffect, useState } from 'react'
import { MdClose, MdManageSearch } from 'react-icons/md'
import styled from 'styled-components'

interface SocialSearchBarProps {
	setFilter: React.Dispatch<React.SetStateAction<string>>
}

const FilterBarWrapper = styled.div`
	width: calc(100% - 20px);
	height: 32px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	overflow: hidden;

	padding: 0px 8px;
	border-radius: 16px;

	background: #262626;

	& > svg {
		flex-shrink: 0;
	}
`
const FilterBarInput = styled.input`
	background: none;
	outline: none;
	border: none;

	flex-grow: 1;
	width: 0;

	font-family: 'Comfortaa';
	font-weight: 600;
	font-size: 14px;
	color: #aaa;

	&::placeholder {
		color: #666;
	}
`

export const SocialSearchBar: FC<SocialSearchBarProps> = ({ setFilter }) => {
	const [inputValue, setInputValue] = useState('')

	useEffect(() => setFilter(inputValue), [inputValue])

	return (
		<FilterBarWrapper>
			<MdManageSearch size='24px' color={'#ccc'} />
			<FilterBarInput
				type='text'
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Type to filter the list...'
				value={inputValue}
				maxLength={20}
			/>
			{inputValue && (
				<MdClose
					size='1.2em'
					cursor={'pointer'}
					color={'#ccc'}
					onClick={() => {
						setInputValue('')
					}}
				/>
			)}
		</FilterBarWrapper>
	)
}
