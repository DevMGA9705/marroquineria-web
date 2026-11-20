import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageCircle, Ruler, ShieldCheck, Sparkles } from 'lucide-react';
import { catalogService, formatCOP } from '../services/api';

const WHATSAPP_NUMBER = '573000000000'; // Reemplaza con tu número real con indicativo 57

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    let active = true;

    catalogService
      .getBySlug(slug)
      .then((data) => {
        if (!active) return;
        setProduct(data);
        setError(null);

        const variants = data.variants || [];
        const initialVariant = variants[0] || null;
        setSelectedVariant(initialVariant);

        const variantImages = initialVariant?.images || [];
        const mainImg =
          variantImages.find((img) => img.isMain)?.imageUrl ||
          variantImages[0]?.imageUrl ||
          data.mainImageUrl ||
          '';
        setSelectedImage(mainImg);
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
  }, [slug]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
    const variantImages = variant?.images || [];
    const mainImg =
      variantImages.find((img) => img.isMain)?.imageUrl ||
      variantImages[0]?.imageUrl ||
      product?.mainImageUrl ||
      '';
    if (mainImg) setSelectedImage(mainImg);
  };

  if (loading) {
    return (
      <div className="page-container">
        <p className="state-message">Cargando detalles del producto...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="page-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Volver al catálogo
        </Link>
        <p className="state-message error">{error || 'Producto no encontrado.'}</p>
      </div>
    );
  }

  const variants = product.variants || [];
  const activeImages = selectedVariant?.images || [];
  const displayPrice = selectedVariant?.price ?? product.minPrice ?? 0;
  const inStock = (selectedVariant?.stock ?? 1) > 0;

  const whatsappMessage = encodeURIComponent(
    `Hola Marroquinería Gómez, me interesa el producto *${product.name}*` +
      (selectedVariant ? ` en color *${selectedVariant.colorName}* (SKU: ${selectedVariant.sku})` : '') +
      ` por ${formatCOP(displayPrice)}. ¿Tienen disponibilidad?`
  );

  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Volver al catálogo
      </Link>

      <div className="detail-grid">
        <div className="detail-gallery">
          <div className="main-photo">
            <img src={selectedImage} alt={product.name} />
          </div>

          {activeImages.length > 1 && (
            <div className="thumbnails-row">
              {activeImages.map((img) => (
                <button
                  key={img.id || img.imageUrl}
                  className={`thumb-btn ${selectedImage === img.imageUrl ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img.imageUrl)}
                >
                  <img src={img.imageUrl} alt={img.altText || product.name} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.categoryName}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatCOP(displayPrice)}</p>

          <p className="detail-description">{product.description}</p>

          {variants.length > 0 && (
            <div className="variants-block">
              <span className="block-label">
                Color seleccionado: <strong>{selectedVariant?.colorName}</strong>
              </span>

              <div className="variant-options">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-chip ${
                      selectedVariant?.id === variant.id ? 'selected' : ''
                    }`}
                    onClick={() => handleSelectVariant(variant)}
                  >
                    <span
                      className="chip-dot"
                      style={{ backgroundColor: variant.colorHex }}
                    />
                    <span>{variant.colorName}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="specs-box">
            <div className="spec-item">
              <Sparkles size={18} className="spec-icon" />
              <div>
                <strong>Material</strong>
                <p>{product.leatherType}</p>
              </div>
            </div>

            {selectedVariant?.hardwareColor && (
              <div className="spec-item">
                <ShieldCheck size={18} className="spec-icon" />
                <div>
                  <strong>Herrajes</strong>
                  <p>{selectedVariant.hardwareColor}</p>
                </div>
              </div>
            )}

            {product.dimensions && (
              <div className="spec-item">
                <Ruler size={18} className="spec-icon" />
                <div>
                  <strong>Dimensiones</strong>
                  <p>{product.dimensions}</p>
                </div>
              </div>
            )}

            {product.careInstructions && (
              <div className="spec-item">
                <CheckCircle2 size={18} className="spec-icon" />
                <div>
                  <strong>Cuidado del cuero</strong>
                  <p>{product.careInstructions}</p>
                </div>
              </div>
            )}
          </div>

          <div className="cta-section">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`whatsapp-btn ${!inStock ? 'disabled' : ''}`}
            >
              <MessageCircle size={20} />
              <span>{inStock ? 'Consultar o pedir por WhatsApp' : 'Agotado temporalmente'}</span>
            </a>

            {selectedVariant && (
              <span className="stock-caption">
                SKU: {selectedVariant.sku} ·{' '}
                {inStock ? `${selectedVariant.stock} unidades disponibles` : 'Sin stock'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}