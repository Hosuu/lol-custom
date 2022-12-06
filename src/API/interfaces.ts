export enum SocialStatus {
	Online,
	Dnd,
	Away,
	Mobile,
	Offline,
}

export interface SummonerData {
	summonerId: string
	groupId: number
	summonerName: string
	summonerIconId: number
	summonerLevel: number
	statusMessage: string
	status: SocialStatus
	unreadedMessage: boolean

	//Optional field for extra data when in [game / queue / champ select]
	statusPayload?: {
		statusOverride: string
		timeStamp: number
	}
}
