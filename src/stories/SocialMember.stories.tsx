import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialStatus } from '../API/interfaces'
import { SocialMember } from '../components/Social/SocialMember'

export default {
	title: 'SocialMember',
	component: SocialMember,
} as ComponentMeta<typeof SocialMember>

const Template: ComponentStory<typeof SocialMember> = (args) => <SocialMember {...args} />

export const Default = Template.bind({})
Default.args = {
	summonerData: {
		summonerName: 'KotoDziwka',
		summonerIconId: 3795,
		groupId: 0,
		status: SocialStatus.Online,
		statusMessage: 'Jestem kurwą',
		summonerId: 'KOTODZIWKA-1',
		summonerLevel: 69,
		unreadedMessage: true,
	},
}
