import { useSortable } from '@dnd-kit/react/sortable'

interface SortableItemProps {
  id: string
  index: number
}

export function SortableItem({ id, index }: SortableItemProps) {
  const { ref } = useSortable({ id, index })

  return (
    <li
      ref={ref}
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
        listStyle: 'none',
      }}
    >
      {id}
    </li>
  )
}
