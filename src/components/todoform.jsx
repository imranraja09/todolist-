import { useState } from 'react'
import { useTodos } from '../context/todocontext'

function TodoForm() {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('Medium')
  const { addTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text, priority)
    setText('')
    setPriority('Medium')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        aria-label="Task priority"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" className="btn-primary">
        + Add Task
      </button>
    </form>
  )
}

export default TodoForm
