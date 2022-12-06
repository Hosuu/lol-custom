var f=Object.defineProperty;var d=(e,t)=>f(e,"name",{value:t,configurable:!0});import{r as u,a as i,j as s}from"./jsx-runtime.6f1b4a9a.js";import{M as h,S,a,b as I,c as x,d as w,e as M}from"./SocialMember.eaf26852.js";import{H as r}from"./styled-components.browser.esm.774284e6.js";import"./iframe.19186500.js";import"./SummonerIcon.75f25f94.js";import"./index.0d80d3af.js";const y=r.div`
	width: 100%;
	background: var(--main-bg);

	transition: background-color 0.15s ease;
	&:hover {
		background: #151515;
	}
`,v=r.div`
	width: 100%;
	height: 100vh;
	max-height: ${e=>e.isOpen?`${e.members*64}px`:"0px"};
	overflow: hidden;

	transition: max-height 0.15s ease-out;
`,A=r.div`
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
`,c=d(({name:e,summoners:t})=>{const[l,p]=u.exports.useState(!0);return i(y,{children:[i(A,{onClick:()=>{p(o=>!o)},children:[s("p",{title:e,children:e}),i("p",{children:["(",t.filter(o=>o.status<3).length,"/",t.length,")"]}),s(h,{size:"1em",style:{rotate:`${-90*Number(l)}deg`}})]}),s(v,{isOpen:l,members:t.length,children:t.sort((o,n)=>o.summonerName.localeCompare(n.summonerName)).sort((o,n)=>o.status-n.status).map(o=>s(S,{summonerData:o},o.summonerId))})]})},"SocialGroup");try{c.displayName="SocialGroup",c.__docgenInfo={description:"",displayName:"SocialGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},summoners:{defaultValue:null,description:"",name:"summoners",required:!0,type:{name:"SummonerData[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Social/SocialGroup.tsx#SocialGroup"]={docgenInfo:c.__docgenInfo,name:"SocialGroup",path:"src/components/Social/SocialGroup.tsx#SocialGroup"})}catch{}const b=r.div`
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
`,O=r.div`
	height: 100px;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #333;
`,_=r.div`
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
`,L=r.div`
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
`,k=r.input`
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
`,B=r.div`
	width: 100%;
	height: 0;
	flex-grow: 1;

	overflow-x: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`,z=["General","Chuje","Dziwki","Szmaty"],C=[{summonerName:"Dobry mudzin",summonerIconId:5180,groupId:0,status:a.Online,statusMessage:"",summonerId:"mudzin1",summonerLevel:69,unreadedMessage:!1},{summonerName:"GG I quit",summonerIconId:29,groupId:0,status:a.Offline,statusMessage:"",summonerId:"mudzin5",summonerLevel:69,unreadedMessage:!1},{summonerName:"GigaCweluch",summonerIconId:542,groupId:1,status:a.Offline,statusMessage:"Jestem cwelem",summonerId:"mudzin25",summonerLevel:69,unreadedMessage:!0},{summonerName:"LittleMati",summonerIconId:534,groupId:1,status:a.Dnd,statusPayload:{statusOverride:"In game (Ranked SR)",timeStamp:Date.now()},statusMessage:"Rammus enjoyer \u{1F60E}",summonerId:"kox",summonerLevel:69,unreadedMessage:!1},{summonerName:"ARAMslut1",summonerIconId:51,groupId:3,status:a.Dnd,statusPayload:{statusOverride:"In Game (ARAM)",timeStamp:Date.now()},statusMessage:"ARAMy dla podludzi",summonerId:"ARAMslut1",summonerLevel:69,unreadedMessage:!1},{summonerName:"ARAMslut2",summonerIconId:60,groupId:3,status:a.Dnd,statusPayload:{statusOverride:"In Queue",timeStamp:Date.now()},statusMessage:"ARAMy dla podludzi",summonerId:"ARAMslut2",summonerLevel:69,unreadedMessage:!1},{summonerName:"Jeszcze jedna szmata",summonerIconId:55,groupId:3,status:a.Online,statusMessage:"zeby scroll testowac",summonerId:"ARAMslut2123",summonerLevel:69,unreadedMessage:!1},{summonerName:"ARAMslut3",summonerIconId:71,groupId:3,status:a.Online,statusPayload:{statusOverride:"I tak sie nie wyswietli wiec chuj w to :)",timeStamp:Date.now()},statusMessage:"ARAMy dla podludzi",summonerId:"ARAMslut3",summonerLevel:69,unreadedMessage:!0},{summonerName:"???",summonerIconId:5180,groupId:0,status:a.Away,statusMessage:"",summonerId:"mudzin2",summonerLevel:69,unreadedMessage:!1},{summonerName:"Izabela \u0141\u0119cka",summonerIconId:4796,groupId:2,status:a.Online,statusMessage:"WOKULSKI WR\xD3\u0106 \u{1F97A}",summonerId:"LECKAXD",summonerLevel:69,unreadedMessage:!0},{summonerName:"KotoDziwka",summonerIconId:3795,groupId:2,status:a.Online,statusMessage:"Jestem kurw\u0105",summonerId:"KOTODZIWKA-1",summonerLevel:69,unreadedMessage:!1},{summonerName:"KotoDziwka2",summonerIconId:4655,groupId:2,status:a.Dnd,statusPayload:{statusOverride:"In Champion Select",timeStamp:Date.now()},statusMessage:"Jestem kurw\u0105 i szmat\u0105",summonerId:"KOTODZIWKA-2",summonerLevel:69,unreadedMessage:!1}],m=d(({})=>{const[e,t]=u.exports.useState(""),[l,p]=u.exports.useState([]);return u.exports.useEffect(()=>{p(C.filter(o=>o.summonerName.toLowerCase().includes(e.toLowerCase())))},[e]),i(b,{children:[s(O,{}),i(_,{children:[s("p",{children:"Friends"}),s(I,{size:18}),s(x,{size:18})]}),i(L,{children:[s(w,{size:"24px",color:"#ccc"}),s(k,{type:"text",onChange:o=>t(o.target.value),value:e,placeholder:"Type to filter the list...",maxLength:20}),e&&s(M,{size:"1em",cursor:"pointer",color:"#ccc",onClick:()=>{t("")}})]}),s(B,{children:z.map((o,n)=>s(c,{name:o,summoners:l.filter(g=>g.groupId===n)},n))})]})},"SocialBar");try{m.displayName="SocialBar",m.__docgenInfo={description:"",displayName:"SocialBar",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Social/SocialBar.tsx#SocialBar"]={docgenInfo:m.__docgenInfo,name:"SocialBar",path:"src/components/Social/SocialBar.tsx#SocialBar"})}catch{}const j={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialBar } from '../components/Social/SocialBar'

export default {
	title: 'SocialBar',
	component: SocialBar,
} as ComponentMeta<typeof SocialBar>

const Template: ComponentStory<typeof SocialBar> = (args) => <SocialBar {...args} />

export const Default = Template.bind({})
Default.args = {}
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:84,line:9},startBody:{col:51,line:9},endBody:{col:84,line:9}}}}},title:"SocialBar",component:m},D=d(e=>s(m,{...e}),"Template"),R=D.bind({});R.args={};const P=["Default"];export{R as Default,P as __namedExportsOrder,j as default};
//# sourceMappingURL=SocialBar.stories.364cb56a.js.map
