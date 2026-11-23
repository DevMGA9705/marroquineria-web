import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export function LocationPage() {
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63587.6!2d-75.5138!3d5.0689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ffa6a42ce3b%3A0xa863cf6423ea141c!2sManizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1700000000000';
  const googleMapsRouteUrl =
    'https://www.google.com/maps/search/?api=1&query=Manizales+Caldas+Colombia';

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-white">
      <div className="mb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-[#C89B54]">
          Visítanos
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-1">
          Nuestro Taller en Manizales
        </h1>
        <p className="text-neutral-400 mt-2 max-w-2xl">
          Conoce de cerca nuestro trabajo artesanal en cuero legítimo, personaliza tus artículos o recoge tus pedidos directamente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 bg-[#181818] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#C89B54] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Ubicación</h3>
                <p className="text-sm text-neutral-400 mt-0.5">
                  Manizales, Caldas, Colombia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#C89B54] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Horario de Atención</h3>
                <p className="text-sm text-neutral-400 mt-0.5">
                  Lunes a Viernes: 8:30 a.m. – 6:00 p.m.<br />
                  Sábados: 9:00 a.m. – 2:00 p.m.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-[#C89B54] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Atención Directa</h3>
                <p className="text-sm text-neutral-400 mt-0.5">
                  Escríbenos por WhatsApp para coordinar entrega o visita al taller.
                </p>
              </div>
            </div>
          </div>

          <a
            href={googleMapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#C89B54] hover:bg-[#b58943] text-[#111111] font-bold py-3 px-4 rounded-xl transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Abrir en Google Maps
          </a>
        </div>

        <div className="lg:col-span-3 bg-[#181818] border border-neutral-800 rounded-2xl overflow-hidden min-h-[360px]">
          <iframe
            title="Ubicación Taller Marroquinería Gómez"
            src={mapsEmbedUrl}
            className="w-full h-full min-h-[360px] border-0 grayscale contrast-125 invert-[90%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}