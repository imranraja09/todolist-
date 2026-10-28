import TodoForm from '../components/todoform'
import TodoList from '../components/todolist'
import { useTodos } from '../context/todocontext'

function Home() {
  const { todos } = useTodos()
  const totalCount = todos.length
  const completedCount = todos.filter((t) => t.completed).length
  const pendingCount = totalCount - completedCount

  return (
    <section>
      <div className="page-header">
        <h1 className="page-title">My Todo List</h1>
        <p className="page-subtitle">
          Organize your daily tasks with a clean and simple workspace
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{totalCount}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-value accent">{pendingCount}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-card">
          <span className="stat-value success">{completedCount}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>

      <div className="todo-card">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  )
}

export default Home
