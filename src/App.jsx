import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodoProvider } from './context/todocontext'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notfound'

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="footer">
            TodoList App • Built with React &amp; Vite
          </footer>
        </div>
      </BrowserRouter>
    </TodoProvider>
  )
}

export default App
