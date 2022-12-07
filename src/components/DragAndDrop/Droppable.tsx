import { DragEvent, FC, useRef } from 'react'

interface DroppableProps {
	children?: any
	onDropAction?: (data: any) => void
}

export const Droppable: FC<DroppableProps> = ({ children, onDropAction }) => {
	const ref = useRef<HTMLDivElement>(null)

	const dropHandler = (e: DragEvent<HTMLDivElement>) => {
		const data = e.dataTransfer.getData('DraggableData')
		onDropAction?.(JSON.parse(data))

		ref.current?.classList.remove('dragOver')
	}

	const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	// const dragEnterHandler = (e: DragEvent<HTMLDivElement>) => {
	// 	e.preventDefault()
	// 	ref.current?.classList.add('dragOver')
	// }

	// const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
	// 	ref.current?.classList.remove('dragOver')
	// }

	return (
		<div
			ref={ref}
			style={{ width: '100%' }}
			onDrop={dropHandler}
			onDragOver={dragOverHandler}
			// onDragEnter={dragEnterHandler}
			// onDragLeave={dragLeaveHandler}
			children={children}
		/>
	)
}
