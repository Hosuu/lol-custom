var a=Object.defineProperty;var t=(e,n)=>a(e,"name",{value:n,configurable:!0});import{S as o,a as r}from"./SocialMember.eaf26852.js";import{j as m}from"./jsx-runtime.6f1b4a9a.js";import"./styled-components.browser.esm.774284e6.js";import"./index.0d80d3af.js";import"./SummonerIcon.75f25f94.js";import"./iframe.19186500.js";const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
		statusMessage: 'Jestem kurw\u0105',
		summonerId: 'KOTODZIWKA-1',
		summonerLevel: 69,
		unreadedMessage: true,
	},
}
`,locationsMap:{default:{startLoc:{col:54,line:10},endLoc:{col:90,line:10},startBody:{col:54,line:10},endBody:{col:90,line:10}}}}},title:"SocialMember",component:o},s=t(e=>m(o,{...e}),"Template"),l=s.bind({});l.args={summonerData:{summonerName:"KotoDziwka",summonerIconId:3795,groupId:0,status:r.Online,statusMessage:"Jestem kurw\u0105",summonerId:"KOTODZIWKA-1",summonerLevel:69,unreadedMessage:!0}};const b=["Default"];export{l as Default,b as __namedExportsOrder,f as default};
//# sourceMappingURL=SocialMember.stories.14c180ac.js.map
