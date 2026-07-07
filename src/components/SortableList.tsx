import { useState } from 'react'
import { DragDropProvider } from '@dnd-kit/react'
import { move } from '@dnd-kit/helpers'
import { SortableItem } from './SortableItem'

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

export function SortableList() {
  const [items, setItems] = useState(initialItems)

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return
        setItems((prev) => move(prev, event))
      }}
    >
      <ul style={{ padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <SortableItem key={item} id={item} index={index} />
        ))}
      </ul>
    </DragDropProvider>
  )
}
