import { Sparkles, ShieldCheck, Truck, Award, MessageCircle } from 'lucide-react';

const ANNOUNCEMENTS = [
  {
    id: 1,
    tag: 'Personalización Artesanal',
    title: 'Grabado de Iniciales y Nombres en Cuero',
    description:
      'Haz que cada pieza sea única. Personalizamos billeteras, tarjeteros, cinturones y bolsos con tus iniciales o logotipo bajo pedido sin afectar el acabado natural del cuero.',
    highlight: 'Disponible en todas nuestras referencias',
    icon: Sparkles,
  },
  {
    id: 2,
    tag: 'Garantía de Origen',
    title: '100% Cuero Legítimo Seleccionado',
    description:
      'Trabajamos exclusivamente con pieles vacunas de primera calidad, herrajes resistentes a la corrosión y costuras reforzadas a mano para garantizar años de durabilidad.',
    highlight: 'Fabricación propia en Manizales',
    icon: ShieldCheck,
  },
  {
    id: 3,
    tag: 'Pedidos Especiales',
    title: 'Regalos Corporativos y Ventas al por Mayor',
    description:
      'Diseñamos lotes personalizados para empresas, eventos y fechas especiales con empaque de presentación y precios preferenciales por volumen.',
    highlight: 'Cotización directa por WhatsApp',
    icon: Award,
  },
  {
    id: 4,
    tag: 'Cobertura Nacional',
    title: 'Envíos Seguros a Toda Colombia',
    description:
      'Despachamos tu pedido desde nuestro taller en Manizales con empaque protector y seguimiento en tiempo real hasta la puerta de tu casa.',
    highlight: 'Entrega rápida y asegurada',
    icon: Truck,
  },
];

export default function AnnouncementsPage() {
  const whatsappUrl =
    'https://wa.me/573214450521?text=' +
    encodeURIComponent('Hola, vengo de la web de Marroquinería Gómez y quisiera más información.');

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-white">
      <div className="mb-10">
        <span className="text-xs font-bold tracking-widest uppercase text-[#C89B54]">
          Taller &amp; Servicios
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-1">
          Novedades y Servicios Especiales
        </h1>
        <p className="text-neutral-400 mt-2 max-w-2xl">
          Conoce los servicios adicionales, beneficios y detalles detrás de cada pieza elaborada en Marroquinería Gómez.
        </p>
      </div>

      {/* Cuadrícula de anuncios visuales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ANNOUNCEMENTS.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className="bg-[#181818] border border-neutral-800 hover:border-[#C89B54]/50 rounded-2xl p-6 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C89B54]/15 text-[#C89B54] border border-[#C89B54]/30">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C89B54]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-[#C89B54]">
                  {item.highlight}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Banner inferior de contacto */}
      <div className="mt-10 bg-[#181818] border border-[#C89B54]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            ¿Buscas un diseño o medida especial?
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Escríbenos directamente y te asesoramos sobre colores, tipos de cuero y tiempos de entrega.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C89B54] hover:bg-[#b58943] text-[#111111] font-bold px-5 py-3 rounded-xl transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}