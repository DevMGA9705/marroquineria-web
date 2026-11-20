import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo">
          <ShoppingBag size={22} className="brand-icon" />
          <span>Marroquinería Gómez</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Catálogo</Link>
        </nav>
      </div>
    </header>
  );
}