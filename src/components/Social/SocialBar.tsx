import { FC, useEffect, useState } from 'react'
import { MdClose, MdGroupAdd, MdLibraryAdd, MdManageSearch } from 'react-icons/md'
import styled from 'styled-components'
import { SocialStatus, SummonerData } from '../../API/interfaces'
import { SocialGroup } from './SocialGroup'

interface SocialBarProps {}

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

const summonersData: SummonerData[] = [
	{
		summonerName: 'Dobry mudzin',
		summonerIconId: 5180,
		groupId: 0,
		status: SocialStatus.Online,
		statusMessage: '',
		summonerId: 'mudzin1',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'GG I quit',
		summonerIconId: 29,
		groupId: 0,
		status: SocialStatus.Offline,
		statusMessage: '',
		summonerId: 'mudzin5',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'GigaCweluch',
		summonerIconId: 542,
		groupId: 1,
		status: SocialStatus.Offline,
		statusMessage: 'Jestem cwelem',
		summonerId: 'mudzin25',
		summonerLevel: 69,
		unreadedMessage: true,
	},
	{
		summonerName: 'LittleMati',
		summonerIconId: 534,
		groupId: 1,
		status: SocialStatus.Dnd,
		statusPayload: {
			statusOverride: 'In game (Ranked SR)',
			timeStamp: Date.now(),
		},
		statusMessage: 'Rammus enjoyer 😎',
		summonerId: 'kox',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'ARAMslut1',
		summonerIconId: 51,
		groupId: 3,
		status: SocialStatus.Dnd,
		statusPayload: {
			statusOverride: 'In Game (ARAM)',
			timeStamp: Date.now(),
		},
		statusMessage: 'ARAMy dla podludzi',
		summonerId: 'ARAMslut1',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'ARAMslut2',
		summonerIconId: 60,
		groupId: 3,
		status: SocialStatus.Dnd,
		statusPayload: {
			statusOverride: 'In Queue',
			timeStamp: Date.now(),
		},
		statusMessage: 'ARAMy dla podludzi',
		summonerId: 'ARAMslut2',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'Jeszcze jedna szmata',
		summonerIconId: 55,
		groupId: 3,
		status: SocialStatus.Online,
		statusMessage: 'zeby scroll testowac',
		summonerId: 'ARAMslut2123',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'ARAMslut3',
		summonerIconId: 71,
		groupId: 3,
		status: SocialStatus.Online,
		statusPayload: {
			statusOverride: 'I tak sie nie wyswietli wiec chuj w to :)',
			timeStamp: Date.now(),
		},
		statusMessage: 'ARAMy dla podludzi',
		summonerId: 'ARAMslut3',
		summonerLevel: 69,
		unreadedMessage: true,
	},
	{
		summonerName: '???',
		summonerIconId: 5180,
		groupId: 0,
		status: SocialStatus.Away,
		statusMessage: '',
		summonerId: 'mudzin2',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'Izabela Łęcka',
		summonerIconId: 4796,
		groupId: 2,
		status: SocialStatus.Online,
		statusMessage: 'WOKULSKI WRÓĆ 🥺',
		summonerId: 'LECKAXD',
		summonerLevel: 69,
		unreadedMessage: true,
	},
	{
		summonerName: 'KotoDziwka',
		summonerIconId: 3795,
		groupId: 2,
		status: SocialStatus.Online,
		statusMessage: 'Jestem kurwą',
		summonerId: 'KOTODZIWKA-1',
		summonerLevel: 69,
		unreadedMessage: false,
	},
	{
		summonerName: 'KotoDziwka2',
		summonerIconId: 4655,
		groupId: 2,
		status: SocialStatus.Dnd,
		statusPayload: {
			statusOverride: 'In Champion Select',
			timeStamp: Date.now(),
		},
		statusMessage: 'Jestem kurwą i szmatą',
		summonerId: 'KOTODZIWKA-2',
		summonerLevel: 69,
		unreadedMessage: false,
	},
]

export const SocialBar: FC<SocialBarProps> = ({}) => {
	const [filter, setFilter] = useState<string>('')
	const [summoners, setSummoners] = useState<SummonerData[]>([])

	useEffect(() => {
		setSummoners(
			summonersData.filter((s) => s.summonerName.toLowerCase().includes(filter.toLowerCase()))
		)
	}, [filter])

	return (
		<SocialBarWrapper>
			<ProfileWrapper></ProfileWrapper>
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
						summoners={summoners.filter((s) => s.groupId === i)}
					/>
				))}
			</FriendListWrapper>
		</SocialBarWrapper>
	)
}
