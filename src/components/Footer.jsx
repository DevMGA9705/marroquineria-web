export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {currentYear} Marroquinería Gómez. Todos los derechos reservados.
        </p>

        <p className="footer-credit">
          Desarrollado por{' '}
          <a
            href="https://plexiaingenieria.online"
            target="_blank"
            rel="noopener noreferrer"
            className="plexia-link"
          >
            Plexia Ingeniería
          </a>
        </p>
      </div>
    </footer>
  );
}