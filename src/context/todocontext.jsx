import { createContext, useContext, useState, useEffect } from 'react'

export const TodoContext = createContext()

const DEFAULT_TODOS = [
  {
    id: 1,
    text: 'Complete React Todo List project layout',
    priority: 'High',
    completed: false,
    createdAt: 'Today',
  },
  {
    id: 2,
    text: 'Review components and Context API state',
    priority: 'Medium',
    completed: true,
    createdAt: 'Today',
  },
  {
    id: 3,
    text: 'Prepare clean UI presentation',
    priority: 'Low',
    completed: false,
    createdAt: 'Today',
  },
]

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todolist_items')
      return saved ? JSON.parse(saved) : DEFAULT_TODOS
    } catch {
      return DEFAULT_TODOS
    }
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todolist_items', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text, priority = 'Medium') => {
    const trimmed = text.trim()
    if (!trimmed) return

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      priority,
      completed: false,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
      }),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    const trimmed = newText.trim()
    if (!trimmed) return
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
    )
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        setFilter,
        filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  return useContext(TodoContext)
}
