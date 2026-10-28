import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <div className="info-card notfound-card">
        <div className="notfound-code">404</div>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>
          Go Back Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
