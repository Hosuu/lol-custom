import { FC } from 'react'
import styled from 'styled-components'

interface SummonerIconProps {
	iconId: number
}

const ImgWrapper = styled.img`
	height: 100%;
`

export const SummonerIcon: FC<SummonerIconProps> = ({ iconId }) => {
	return (
		<ImgWrapper
			src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${iconId}.png`}
		/>
	)
}
