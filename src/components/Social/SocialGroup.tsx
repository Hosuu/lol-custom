import { FC, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import styled from 'styled-components'
import { SummonerData } from '../../API/interfaces'
import { Droppable } from '../DragAndDrop/Droppable'
import { SocialMember } from './SocialMember'

interface SocialGroupProps {
	id: number
	name: string
	summoners: SummonerData[]
}

const SocialGroupWrapper = styled.div`
	width: 100%;
	background: var(--main-bg);

	transition: background-color 0.15s ease;
	&:hover {
		background: #151515;
	}
`

const SocialMembersWrapper = styled.div<{ isOpen: boolean; members: number }>`
	width: 100%;
	height: 100vh;
	max-height: ${(p) => (p.isOpen ? `${p.members * 64}px` : '0px')};
	overflow: hidden;

	transition: max-height 0.15s ease-out;
`

const SocialGroupLabel = styled.div`
	position: sticky;
	top: 0;
	z-index: 2;

	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 4px;

	padding: 4px 8px;
	border-bottom: 1px solid #333;

	font-weight: 700;
	color: #ccc;
	line-height: 18px;
	user-select: none;

	background: inherit;
	transition: background-color 0.15s ease;

	&:hover {
		background: #1a1a1a;
	}

	& > :nth-child(1) {
		flex-grow: 1;
		width: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	& > svg {
		transition: rotate 0.15s ease-out;
	}
`

export const SocialGroup: FC<SocialGroupProps> = ({ id, name, summoners }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Droppable
			onDropAction={({ summonerName, groupId }) => {
				if (groupId != id) console.log(`"${summonerName}" dropped on folder "${name}"`)
			}}>
			<SocialGroupWrapper>
				<SocialGroupLabel
					onClick={() => {
						setIsOpen((v) => !v)
					}}>
					<p title={name}>{name}</p>
					<p>
						({summoners.filter((s) => s.status < 3).length}/{summoners.length})
					</p>
					<MdArrowBackIosNew
						size={'1em'}
						style={{ rotate: `${-90 * Number(isOpen)}deg` }}
					/>
				</SocialGroupLabel>
				<SocialMembersWrapper isOpen={isOpen} members={summoners.length}>
					{summoners
						.sort((a, b) => a.summonerName.localeCompare(b.summonerName))
						.sort((a, b) => a.status - b.status)
						.map((s) => (
							<SocialMember summonerData={s} key={s.summonerId} />
						))}
				</SocialMembersWrapper>
			</SocialGroupWrapper>
		</Droppable>
	)
}
