import { DragEvent, FC } from 'react'

interface DraggableProps {
	dragData: string
	children?: any
}

export const Draggable: FC<DraggableProps> = ({ dragData, children }) => {
	const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('DraggableData', dragData)
	}

	return <div draggable={true} onDragStart={dragStartHandler} children={children} />
}
