import React from 'react'
import { CSSvariables } from '../src/styles/CSSvariables'
import { GlobalStyles } from '../src/styles/GlobalStyles'
import { ResetCSS } from '../src/styles/ResetCSS'

export const decorators = [
	(Story) => (
		<>
			<ResetCSS />
			<CSSvariables />
			<GlobalStyles />
			<Story />
		</>
	),
]

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
