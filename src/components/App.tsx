import { useContextMenu } from '../contexts/ContextMenuContext'

function App() {
	const contextMenuHandler = useContextMenu([
		{
			label: 'Disabled',
			type: 'disabled',
			action: () => {
				console.log('diabled')
			},
		},
		{
			label: 'Hello',
			type: 'normal',
			action: () => {
				console.log('Hello world')
			},
		},
		{
			label: 'Bye',
			type: 'normal',
			action: () => {
				console.log('bye')
			},
		},
		{
			label: 'Delete',
			type: 'danger',
			action: () => {
				console.log('delete')
			},
		},
	])
	return (
		<div className='App' onContextMenu={contextMenuHandler}>
			Siema
		</div>
	)
}

export default App
