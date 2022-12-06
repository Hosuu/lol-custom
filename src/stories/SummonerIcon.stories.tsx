import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SummonerIcon } from '../components/Utils/SummonerIcon'

export default {
	title: 'SummonerIcon',
	component: SummonerIcon,
} as ComponentMeta<typeof SummonerIcon>

const Template: ComponentStory<typeof SummonerIcon> = (args) => <SummonerIcon {...args} />

export const Default = Template.bind({})
Default.args = {
	iconId: 57,
}
