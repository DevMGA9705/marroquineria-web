import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationPage() {
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63587.6!2d-75.5138!3d5.0689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ffa6a42ce3b%3A0xa863cf6423ea141c!2sManizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1700000000000';
  const googleMapsRouteUrl =
    'https://www.google.com/maps/search/?api=1&query=Manizales+Caldas+Colombia';

  return (
    <section className="info-page">
      <div className="info-header">
        <span className="info-eyebrow">Visítanos</span>
        <h1 className="info-title">Nuestro Taller en Manizales</h1>
        <p className="info-subtitle">
          Conoce de cerca nuestro trabajo artesanal en cuero legítimo, personaliza tus artículos o recoge tus pedidos directamente.
        </p>
      </div>

      <div className="location-grid">
        <div className="location-card">
          <div className="location-items">
            <div className="location-item">
              <MapPin size={20} className="location-item-icon" />
              <div>
                <h3>Ubicación</h3>
                <p>Manizales, Caldas, Colombia</p>
              </div>
            </div>

            <div className="location-item">
              <Clock size={20} className="location-item-icon" />
              <div>
                <h3>Horario de Atención</h3>
                <p>
                  Lunes a Viernes: 8:30 a.m. – 6:00 p.m.<br />
                  Sábados: 9:00 a.m. – 2:00 p.m.
                </p>
              </div>
            </div>

            <div className="location-item">
              <Phone size={20} className="location-item-icon" />
              <div>
                <h3>Atención Directa</h3>
                <p>Escríbenos por WhatsApp para coordinar entrega o visita al taller.</p>
              </div>
            </div>
          </div>

          <a
            href={googleMapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            <Navigation size={18} />
            Abrir en Google Maps
          </a>
        </div>

        <div className="location-map-box">
          <iframe
            title="Ubicación Taller Marroquinería Gómez"
            src={mapsEmbedUrl}
            className="location-map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}