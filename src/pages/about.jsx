import { Link } from 'react-router-dom'

function About() {
  return (
    <section>
      <div className="page-header">
        <h1 className="page-title">About This App</h1>
        <p className="page-subtitle">
          A clean, minimal React Todo List built with Context API &amp; React Router
        </p>
      </div>

      <div className="info-card">
        <h2>Simple Daily Task Management</h2>
        <p>
          This Todo List application helps you organize your daily tasks, set
          priorities, edit items inline, and filter between pending and
          completed work — all saved automatically in your browser.
        </p>

        <div className="feature-grid">
          <div className="feature-box">
            <h3>⚡ Context API</h3>
            <p>Centralized state management across components and pages.</p>
          </div>
          <div className="feature-box">
            <h3>💾 Local Storage</h3>
            <p>Tasks stay saved automatically even after refreshing the page.</p>
          </div>
          <div className="feature-box">
            <h3>🎯 Priority Tags</h3>
            <p>Categorize tasks into Low, Medium, and High priority levels.</p>
          </div>
          <div className="feature-box">
            <h3>🧭 React Router</h3>
            <p>Smooth multi-page navigation between Home, About, and 404 views.</p>
          </div>
        </div>

        <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>
          ← Back to Todo List
        </Link>
      </div>
    </section>
  )
}

export default About
