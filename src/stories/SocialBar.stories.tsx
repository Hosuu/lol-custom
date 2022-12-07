import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialBar } from '../components/Social/SocialBar'
import { summonersData } from './mockupData'

export default {
	title: 'SocialBar',
	component: SocialBar,
} as ComponentMeta<typeof SocialBar>

const Template: ComponentStory<typeof SocialBar> = (args) => <SocialBar {...args} />

export const Default = Template.bind({})
Default.args = {
	summonersData: summonersData,
}
