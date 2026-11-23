import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationPage() {
  const mapsEmbedUrl =
    'https://maps.google.com/maps?q=5.061152,-75.494846&t=&z=17&ie=UTF8&iwloc=&output=embed';
  const googleMapsRouteUrl =
    'https://www.google.com/maps/place/Cra.+24+%23+54-56,+Manizales,+Caldas/@5.0611573,-75.4974209,17z/data=!3m1!4b1!4m6!3m5!1s0x8e476f88263a2513:0xd979ed033a91cda5!8m2!3d5.061152!4d-75.494846!16s%2Fg%2F11x2m3g_0g?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D';

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
                <p>Cra. 24 # 54-56, Manizales, Caldas</p>
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