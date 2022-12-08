import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialStatus } from '../API/interfaces'
import { SocialMember } from '../components/Social/SocialMember'

export default {
	title: 'SocialMember',
	component: SocialMember,
	decorators: [
		(Story) => (
			<div style={{ background: '#111', width: 256 }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof SocialMember>

const Template: ComponentStory<typeof SocialMember> = (args) => <SocialMember {...args} />

export const Online = Template.bind({})
Online.args = {
	summonerData: {
		summonerName: 'Online Summoner',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Online,
		statusMessage: 'Description',
		summonerId: 'SummonerId',
		summonerLevel: 0,
		unreadedMessage: false,
	},
}

export const InGame = Template.bind({})
InGame.args = {
	summonerData: {
		summonerName: 'Playing Summoner',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Dnd,
		statusPayload: {
			statusOverride: 'In Game (ARAM)',
			timeStamp: Date.now(),
		},
		statusMessage: 'Description',
		summonerId: 'SummonerId',
		summonerLevel: 0,
		unreadedMessage: false,
	},
}

export const Away = Template.bind({})
Away.args = {
	summonerData: {
		summonerName: 'Away Summoner',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Away,
		statusMessage: 'Description',
		summonerId: 'SummonerId',
		summonerLevel: 0,
		unreadedMessage: false,
	},
}

export const Offline = Template.bind({})
Offline.args = {
	summonerData: {
		summonerName: 'Offline Summoner',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Offline,
		statusMessage: 'Description',
		summonerId: 'SummonerId',
		summonerLevel: 0,
		unreadedMessage: false,
	},
}

export const OnlineNewMessage = Template.bind({})
OnlineNewMessage.args = {
	summonerData: {
		summonerName: 'Online Summoner',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Online,
		statusMessage: 'Description',
		summonerId: 'SummonerId',
		summonerLevel: 0,
		unreadedMessage: true,
	},
}
