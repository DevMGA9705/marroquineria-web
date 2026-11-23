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
          <Link to="/novedades" className="text-neutral-300 hover:text-[#C89B54] transition-colors">
            Novedades
          </Link>
          <Link to="/ubicacion" className="text-neutral-300 hover:text-[#C89B54] transition-colors">
            Ubicación
          </Link>
        </nav>
      </div>
    </header>
  );
}