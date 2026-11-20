import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo">
          <img
            src="/logo.jpg"
            alt="Logo Marroquinería Gómez"
            className="brand-logo-img"
          />
          <span>Marroquinería Gómez</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Catálogo</Link>
        </nav>
      </div>
    </header>
  );
}