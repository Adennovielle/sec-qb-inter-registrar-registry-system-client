import FooterLinks from "./FooterLinks";

const FooterSections = ({ footerSections }) => {
  return (
    <>
      {footerSections.map((section) => (
        <div key={section.title} className="col">
          <h5 className="fw-bold">{section.title}</h5>

          {section.description && (
            <p
              id="footer-description"
              className="text-white text-start"
              style={{ fontSize: "15px" }}
            >
              {section.description}
            </p>
          )}

          {section.links && <FooterLinks links={section.links} />}
        </div>
      ))}
    </>
  );
};

export default FooterSections;
