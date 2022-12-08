import { FC, useEffect, useState } from 'react'
import { MdGroupAdd, MdLibraryAdd } from 'react-icons/md'
import styled from 'styled-components'
import { SummonerData } from '../../API/interfaces'
import { Droppable } from '../DragAndDrop/Droppable'
import { SocialGroup } from './SocialGroup'
import { SocialSearchBar } from './SocialSearchBar'

interface SocialBarProps {
	summonersData: SummonerData[]
}

const SocialBarWrapper = styled.div`
	width: 256px;
	height: 900px;

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
		cursor: pointer;
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
				onDropAction={({ summonerName }) =>
					console.log(`"${summonerName}" has been invited to your current game lobby`)
				}>
				<ProfileWrapper>GAME INVITE SPOT</ProfileWrapper>
			</Droppable>

			<FriendsListLabel>
				<p>Friends</p>
				<MdGroupAdd size={'1.1em'} onClick={() => console.log('Create new folder')} />
				<MdLibraryAdd size={'1.1em'} onClick={() => console.log('Add new Friend')} />
			</FriendsListLabel>

			<SocialSearchBar setFilter={setFilter} />

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
