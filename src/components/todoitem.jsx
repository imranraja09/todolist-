import { useState } from 'react'
import { useTodos } from '../context/todocontext'

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos()
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText)
    } else {
      setEditText(todo.text)
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  const priorityClass = (todo.priority || 'Medium').toLowerCase()

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <button
          type="button"
          className={`checkbox-btn ${todo.completed ? 'checked' : ''}`}
          onClick={() => toggleTodo(todo.id)}
          aria-label="Toggle complete"
        >
          {todo.completed ? '✓' : ''}
        </button>

        {isEditing ? (
          <div className="edit-row">
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        ) : (
          <div className="todo-content">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-meta">
              <span className={`priority-badge ${priorityClass}`}>
                {todo.priority || 'Medium'}
              </span>
              {todo.createdAt && (
                <span className="todo-date">{todo.createdAt}</span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              type="button"
              className="action-btn save"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="action-btn"
              onClick={() => {
                setEditText(todo.text)
                setIsEditing(false)
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="action-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="action-btn delete"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TodoItem
