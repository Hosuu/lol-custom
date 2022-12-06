import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { CSSvariables } from './styles/CSSvariables'
import { GlobalStyles } from './styles/GlobalStyles'
import { ResetCSS } from './styles/ResetCSS'

//Chromatic pls work uwu
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ResetCSS />
		<CSSvariables />
		<GlobalStyles />
		<App />
	</React.StrictMode>
)
