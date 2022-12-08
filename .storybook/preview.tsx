import React from 'react'
import { ContextMenuProvider } from '../src/contexts/ContextMenuContext'
import { CSSvariables } from '../src/styles/CSSvariables'
import { GlobalStyles } from '../src/styles/GlobalStyles'
import { ResetCSS } from '../src/styles/ResetCSS'

export const decorators = [
	(Story: any) => (
		<>
			<ContextMenuProvider>
				<ResetCSS />
				<CSSvariables />
				<GlobalStyles />
				<Story />
			</ContextMenuProvider>
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
