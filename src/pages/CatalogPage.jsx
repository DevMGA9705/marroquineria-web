import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { catalogService, formatCOP } from '../services/api';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    let active = true;

    catalogService
      .getAll()
      .then((data) => {
        if (!active) return;
        setProducts(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        if (!active) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);
  const categories = ['Todas', ...new Set(products.map((p) => p.categoryName).filter(Boolean))];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todas' || item.categoryName === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.leatherType && item.leatherType.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      <section className="hero-section">
        <span className="hero-badge">HECHO A MANO EN COLOMBIA</span>
        <h1>Artesanía en Cuero Genuino</h1>
        <p>
          Piezas diseñadas para perdurar. Selecciona cada artículo para explorar sus tonos,
          herrajes y especificaciones.
        </p>
      </section>

      <div className="filters-wrapper">
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por nombre o tipo de cuero..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="state-message">Cargando colección...</p>}
      {error && <p className="state-message error">{error}</p>}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="state-message">No hay productos que coincidan con tu búsqueda.</p>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="products-grid">
          {filteredProducts.map((item) => {
            const colors = item.availableColors
              ? item.availableColors.split(',').map((c) => c.trim())
              : [];

            return (
              <Link to={`/producto/${item.slug}`} key={item.id} className="product-card">
                <div className="card-image">
                  <img src={item.mainImageUrl} alt={item.name} loading="lazy" />
                  <span className="card-category">{item.categoryName}</span>
                </div>

                <div className="card-content">
                  <h2>{item.name}</h2>
                  <p className="card-leather">{item.leatherType}</p>

                  <div className="card-bottom">
                    <div>
                      <span className="price-hint">Desde</span>
                      <p className="card-price">{formatCOP(item.minPrice)}</p>
                    </div>

                    {colors.length > 0 && (
                      <div className="swatches" title="Tonos disponibles">
                        {colors.map((hex, idx) => (
                          <span
                            key={idx}
                            className="swatch-dot"
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}