const ContactColumn = ({ contactInfoData }) => {
  return (
    <ul className="list-unstyled">
      {contactInfoData.map(({ icon: Icon, text }, index) => (
        <li
          key={index}
          className="d-flex align-items-start mb-1 cursor-default off-white-text"
        >
          <Icon className="me-2 mt-1" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactColumn;
