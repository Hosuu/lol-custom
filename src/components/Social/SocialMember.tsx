import { FC } from 'react'
import { MdMarkChatUnread } from 'react-icons/md'
import styled, { css } from 'styled-components'
import { SocialStatus, SummonerData } from '../../API/interfaces'
import { useContextMenu } from '../../contexts/ContextMenuContext'
import { Draggable } from '../DragAndDrop/Draggable'
import { SummonerIcon } from '../Utils/SummonerIcon'

interface SocialMemberProps {
	summonerData: SummonerData
}

const SocialMemberWrapper = styled.div`
	width: 256px;
	height: 64px;

	padding: 10px 8px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;

	background: inherit;
	transition: background-color 0.2s ease;

	cursor: pointer;
	user-select: none;
	&:hover {
		background: #1a1a1a;
	}
`

//Based on Social Status Enum
const statusColorMap = [
	'--online-green',
	'--dnd-blue',
	'--away-red',
	'--offline-grey',
	'--offline-grey',
]

const AvatarWrapper = styled.div<{ status: SocialStatus }>`
	position: relative;
	width: 48px;
	height: 48px;
	flex-shrink: 0;

	border-width: 2px;
	border-style: solid;
	border-color: var(${(p) => statusColorMap[p.status]});
	border-radius: 8px;

	filter: ${({ status }) => (status > 2 ? 'saturate(0.2)' : 'none')};

	//Darken edges over image
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: inset 0 0 5px 3px #000000;
	}

	overflow: hidden;
	transition-property: filter, border-color;
	transition-timing-function: ease-out;
	transition-duration: 0.4s;
`

const TextsWrapper = styled.div`
	flex: 1;
	width: 0;

	display: flex;
	flex-direction: column;
	gap: 4px;
`

const TextsMixin = css`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: 1.1em;
`

const SummonerName = styled.p`
	font-weight: 700;
	font-size: 16px;
	color: #fff;
	${TextsMixin}
`

const StatusMessage = styled.p<{ status: SocialStatus }>`
	font-weight: 600;
	font-size: 12px;
	color: var(${(p) => statusColorMap[p.status]});
	${TextsMixin}

	transition: color 0.4s ease-out;
`

export const SocialMember: FC<SocialMemberProps> = ({
	summonerData: {
		summonerIconId,
		summonerName,
		statusMessage,
		status,
		unreadedMessage,
		statusPayload,
		summonerId,
		groupId,
	},
}) => {
	const parsedStatusMessage =
		status != SocialStatus.Dnd
			? ((status === SocialStatus.Online || status === SocialStatus.Away) && statusMessage) ||
			  SocialStatus[status]
			: statusPayload?.statusOverride

	const contextMenuHandler = useContextMenu([
		{
			label: 'Invite to game',
			type: 'disabled',
			action() {
				console.log(summonerName, ' => Invite to game')
			},
		},
		{
			label: 'Send Message',
			type: 'normal',
			action() {
				console.log(summonerName, ' => Send Message')
			},
		},
		{
			label: 'Spectate Game',
			type: 'disabled',
			action() {
				console.log(summonerName, ' => Spectate Game')
			},
		},
		{
			label: 'View Profile',
			type: 'normal',
			action() {
				console.log(summonerName, ' => View Profile')
			},
		},
		{
			label: 'Give Gift',
			type: 'normal',
			action() {
				console.log(summonerName, ' => Give Gift')
			},
		},
		{
			label: 'Add Note',
			type: 'normal',
			action() {
				console.log(summonerName, ' => Add Note')
			},
		},
		{
			label: '',
			type: 'separator',
			action: () => null,
		},
		{
			label: 'Unfriend',
			type: 'danger',
			action() {
				console.log(summonerName, ' => Unfriend')
			},
		},
		{
			label: 'Block',
			type: 'danger',
			action() {
				console.log(summonerName, ' => Block')
			},
		},
	])

	return (
		<Draggable dragData={JSON.stringify({ summonerName, groupId })}>
			<SocialMemberWrapper onContextMenu={contextMenuHandler}>
				<AvatarWrapper status={status}>
					<SummonerIcon iconId={summonerIconId} />
				</AvatarWrapper>
				<TextsWrapper>
					<SummonerName children={summonerName} />
					<StatusMessage children={parsedStatusMessage} status={status} />
				</TextsWrapper>
				{unreadedMessage && (
					<MdMarkChatUnread size='24px' color='#ccc' style={{ flexShrink: 0 }} />
				)}
			</SocialMemberWrapper>
		</Draggable>
	)
}
