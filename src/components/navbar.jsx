import { NavLink, Link } from 'react-router-dom'
import { useTodos } from '../context/todocontext'
import logo from '../assets/logo.svg'

function Navbar() {
  const { todos } = useTodos()
  const pendingCount = todos.filter((todo) => !todo.completed).length

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="TodoList Logo" className="brand-logo" />
          <span>TodoList</span>
          {pendingCount > 0 && (
            <span className="brand-badge">{pendingCount} pending</span>
          )}
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
