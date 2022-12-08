import {
	createContext,
	Dispatch,
	FC,
	MouseEvent,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'
import styled from 'styled-components'

interface ContextMenuData {
	x: number
	y: number
	actions: ContextMenuAction[]
}

interface ContextMenuAction {
	label: string
	type: 'disabled' | 'normal' | 'danger' | 'separator'
	action: () => void
}

const ContextMenuContext = createContext<Dispatch<React.SetStateAction<ContextMenuData | null>>>(
	() => null
)

const ContextMenuWrapper = styled.div<{ actionsAmount: number }>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;

	display: flex;
	flex-direction: column;
	padding: 8px;

	background: rgba(21, 21, 21, 0.8);
	border: 1px solid #222222;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(3px);
	border-radius: 8px;
`

const colorMap = {
	normal: '#ccc',
	disabled: '#666',
	danger: '#B13D3D',
}

const hoverColorMap = {
	normal: '#fff',
	disabled: '#666',
	danger: '#ccc',
}

const hoverBgMap = {
	normal: 'rgba(14, 14, 14, 0.8)',
	disabled: 'none',
	danger: 'rgba(119, 33, 33, 0.8);',
}

const ContextMenuAction = styled.div<{ type: 'disabled' | 'normal' | 'danger' }>`
	padding: 8px;
	border-radius: 4px;

	color: ${({ type }) => colorMap[type]};
	cursor: pointer;
	user-select: none;

	&:hover {
		color: ${({ type }) => hoverColorMap[type]};
		background: ${({ type }) => hoverBgMap[type]};
	}
`

const ContextMenuSeparator = styled.div`
	width: 100%;
	padding: 4px;
`
const ContextMenuSeparatorBar = styled.div`
	width: 100%;
	height: 2px;
	border-radius: 2px;
	background: #444;
`

const defaultPreventer = (e: any) => e.preventDefault()

export const ContextMenuProvider: FC<{ children?: any }> = ({ children }) => {
	const [contextMenuData, setContextMenuData] = useState<ContextMenuData | null>(null)
	const contextMenuRef = useRef<HTMLDivElement | null>(null)
	const [xOffset, setXOffset] = useState(0)
	const [yOffset, setYOffset] = useState(0)

	const windowClickListener = (e: globalThis.MouseEvent) => {
		if (!contextMenuRef.current?.contains(e.target as Node)) {
			setContextMenuData(null)
		}
	}

	useEffect(() => {
		window.addEventListener('mousedown', windowClickListener)
		window.addEventListener('contextmenu', defaultPreventer)
		return () => {
			window.removeEventListener('mousedown', windowClickListener)
			window.removeEventListener('contextmenu', defaultPreventer)
		}
	}, [])

	useLayoutEffect(() => {
		if (contextMenuData && contextMenuRef.current) {
			//-16 is offset from useContextMenuHook
			const upperY = contextMenuData.y - 16
			const bottomY = contextMenuData.y - 16 + contextMenuRef.current.offsetHeight

			//+16 is offset from useContextMenuHook
			const leftX = contextMenuData.y + 16
			const rightX = contextMenuData.y + 16 + contextMenuRef.current.offsetWidth

			let offsetY = 0
			let offsetX = 0

			if (upperY < 16) offsetY -= upperY + 16
			if (bottomY > window.innerHeight + window.scrollY - 16)
				offsetY -= bottomY - (window.innerHeight + window.scrollY - 16)

			if (leftX < 16) offsetX -= leftX + 16
			if (rightX > window.innerWidth - 16) offsetX -= rightX - (window.innerWidth - 16)

			setXOffset(offsetX)
			setYOffset(offsetY)
		}
	}, [contextMenuData])

	return (
		<ContextMenuContext.Provider value={setContextMenuData}>
			{children}
			{contextMenuData && (
				<ContextMenuWrapper
					actionsAmount={contextMenuData.actions.length}
					ref={contextMenuRef}
					style={{
						top: contextMenuData.y + yOffset + 'px',
						left: contextMenuData.x + xOffset + 'px',
					}}>
					{contextMenuData.actions.map(({ label, action, type }) =>
						type == 'separator' ? (
							<ContextMenuSeparator children={<ContextMenuSeparatorBar />} />
						) : (
							<ContextMenuAction
								type={type}
								key={String(action)}
								children={label}
								onClick={() => {
									if (type === 'disabled') return
									action()
									setContextMenuData(null)
								}}
							/>
						)
					)}
				</ContextMenuWrapper>
			)}
		</ContextMenuContext.Provider>
	)
}

export const useContextMenu = (actions: ContextMenuAction[]) => {
	const setContextMenuData = useContext(ContextMenuContext)

	return function onContextHandler(e: MouseEvent) {
		e.preventDefault()
		const { pageX: x, pageY: y } = e
		setContextMenuData({ x: x + 16, y: y - 16, actions })
	}
}
