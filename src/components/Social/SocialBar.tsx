import { FC, useEffect, useState } from 'react'
import { MdClose, MdGroupAdd, MdLibraryAdd, MdManageSearch } from 'react-icons/md'
import styled from 'styled-components'
import { SummonerData } from '../../API/interfaces'
import { Droppable } from '../DragAndDrop/Droppable'
import { SocialGroup } from './SocialGroup'

interface SocialBarProps {
	summonersData: SummonerData[]
}

const SocialBarWrapper = styled.div`
	width: 256px;
	height: 680px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;

	background: var(--main-bg);

	& > div {
		flex-shrink: 0;
	}
`

//MOVE IT TO ITS OWN COMPONENT
const ProfileWrapper = styled.div`
	height: 100px;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #333;
	color: #fff;
	display: grid;
	place-items: center;
`

const FriendsListLabel = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 4px 8px;
	gap: 10px;

	color: #fff;
	user-select: none;

	& > p {
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
		flex-grow: 1;
	}

	& > svg {
		flex-shrink: 0;
	}
`
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

const FriendListWrapper = styled.div`
	width: 100%;
	height: 0;
	flex-grow: 1;

	overflow-x: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`

const socialGroups = ['General', 'Chuje', 'Dziwki', 'Szmaty']

export const SocialBar: FC<SocialBarProps> = ({ summonersData }) => {
	const [filter, setFilter] = useState<string>('')
	const [filtredSummoners, setFiltredSummoners] = useState<SummonerData[]>([])

	useEffect(() => {
		setFiltredSummoners(
			summonersData.filter((s) => s.summonerName.toLowerCase().includes(filter.toLowerCase()))
		)
	}, [filter, summonersData])

	return (
		<SocialBarWrapper>
			<Droppable
				onDropAction={({ summonerName, groupId }) =>
					console.log(`"${summonerName}" has been invited to your current game lobby`)
				}>
				<ProfileWrapper>GAME INVITE SPOT</ProfileWrapper>
			</Droppable>
			<FriendsListLabel>
				<p>Friends</p>
				<MdGroupAdd size={18} />
				<MdLibraryAdd size={18} />
			</FriendsListLabel>
			<FilterBarWrapper>
				<MdManageSearch size='24px' color={'#ccc'} />
				<FilterBarInput
					type='text'
					onChange={(e) => setFilter(e.target.value)}
					value={filter}
					placeholder='Type to filter the list...'
					maxLength={20}
				/>
				{filter && (
					<MdClose
						size='1em'
						cursor={'pointer'}
						color={'#ccc'}
						onClick={() => {
							setFilter('')
						}}
					/>
				)}
			</FilterBarWrapper>
			<FriendListWrapper>
				{socialGroups.map((g, i) => (
					<SocialGroup
						name={g}
						key={i}
						id={i}
						summoners={filtredSummoners.filter((s) => s.groupId === i)}
					/>
				))}
			</FriendListWrapper>
		</SocialBarWrapper>
	)
}
