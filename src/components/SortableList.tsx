import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { SortableItem } from './SortableItem'

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

export function SortableList() {
  const [items, setItems] = useState(initialItems)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id as string)
        const newIndex = prev.indexOf(over.id as string)
        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item) => (
            <SortableItem key={item} id={item}>
              <li
                style={{
                  padding: '16px 24px',
                  marginBottom: 8,
                  background: 'var(--bg-elevated, #fff)',
                  border: '1px solid var(--border, #e5e4e7)',
                  borderRadius: 8,
                  cursor: 'grab',
                  textAlign: 'left',
                  fontWeight: 500,
                  color: 'var(--text-h, #08060d)',
                  boxShadow: 'var(--shadow, 0 1px 3px rgba(0,0,0,0.1))',
                }}
              >
                {item}
              </li>
            </SortableItem>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  )
}
