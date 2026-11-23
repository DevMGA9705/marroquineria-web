import { Sparkles, ShieldCheck, Truck, Award, MessageCircle } from 'lucide-react';

const ANNOUNCEMENTS = [
    {
        id: 1,
        tag: 'Taller de Restauración',
        title: 'Restauración y Reparación de Artículos en Cuero',
        description:
            'Devuélvele la vida a tus piezas favoritas. Realizamos cambio de cierres, refuerzo de costuras, renovación de color, hidratación profunda y cambio de herrajes conservando la esencia original del cuero.',
        highlight: 'Diagnóstico y cotización sin compromiso',
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
        title: 'Diseño a Medida y Regalos Especiales',
        description:
            'Fabricamos piezas únicas sobre pedido adaptadas a tus gustos, medidas y necesidades. Ideales para obsequios memorables en fechas especiales con acabados artesanales y empaque de presentación.',
        highlight: 'Asesoría personalizada por WhatsApp',
        icon: Award,
    },
    {
        id: 4,
        tag: 'Tapicería Artesanal',
        title: 'Tapizado de Todo Tipo de Muebles en Cuero',
        description:
            'Renovamos y tapizamos salas, poltronas, sillas de comedor, cabeceros y mobiliario de oficina en cuero legítimo de alta resistencia, con acabados finos y costuras de precisión.',
        highlight: 'Acabados duraderos y selección de tonos',
        icon: Award,
    },
];

export default function AnnouncementsPage() {
    const whatsappUrl =
        'https://wa.me/573214450521?text=' +
        encodeURIComponent('Hola, vengo de la web de Marroquinería Gómez y quisiera más información.');

    return (
        <section className="info-page">
            <div className="info-header">
                <span className="info-eyebrow">Taller &amp; Servicios</span>
                <h1 className="info-title">Novedades y Servicios Especiales</h1>
                <p className="info-subtitle">
                    Conoce los servicios adicionales, beneficios y detalles detrás de cada pieza elaborada en Marroquinería Gómez.
                </p>
            </div>

            <div className="announcements-grid">
                {ANNOUNCEMENTS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <article key={item.id} className="announcement-card">
                            <div>
                                <div className="announcement-top">
                                    <span className="announcement-badge">{item.tag}</span>
                                    <div className="announcement-icon-box">
                                        <Icon size={20} />
                                    </div>
                                </div>

                                <h2 className="announcement-card-title">{item.title}</h2>
                                <p className="announcement-card-desc">{item.description}</p>
                            </div>

                            <div className="announcement-footer">{item.highlight}</div>
                        </article>
                    );
                })}
            </div>

            <div className="cta-banner">
                <div>
                    <h3>¿Buscas un diseño o medida especial?</h3>
                    <p>
                        Escríbenos directamente y te asesoramos sobre colores, tipos de cuero y tiempos de entrega.
                    </p>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn"
                >
                    <MessageCircle size={18} />
                    Consultar por WhatsApp
                </a>
            </div>
        </section>
    );
}