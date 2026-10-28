import { useTodos } from '../context/todocontext'
import TodoItem from './todoitem'

function TodoList() {
  const { todos, filter, setFilter, filteredTodos, clearCompleted } = useTodos()
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div>
      <div className="todo-toolbar">
        <div className="filter-tabs">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({todos.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Pending ({todos.length - completedCount})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </button>
        </div>

        {completedCount > 0 && (
          <button
            type="button"
            className="clear-btn"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        )}
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <p className="empty-title">No tasks found</p>
          <p className="empty-text">
            {filter === 'all'
              ? 'Add a new task above to get started!'
              : `You have no ${filter} tasks right now.`}
          </p>
        </div>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
