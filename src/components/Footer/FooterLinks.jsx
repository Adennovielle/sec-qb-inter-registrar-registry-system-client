const FooterLinks = ({ links }) => {
  return (
    <ul className="list-unstyled">
      {links.map((link) => (
        <li key={link.href}>
          <a
            className="off-white-text text-secondary"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
