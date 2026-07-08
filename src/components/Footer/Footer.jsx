import React from "react";
import "./Footer.css";
import govSeal from "../../assets/gov-ph-seal-footer.png";
import FooterSection from "./FooterSections";
import ContactColumn from "./ContactColumn";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { footerSections } from "./footerData";

const Footer = () => {
  const contactInfoData = [
    {
      icon: MdPhone,
      text: "(02) 8818-8178",
    },
    {
      icon: MdEmail,
      text: "ipsd_msrd@sec.gov.ph",
    },
    {
      icon: MdLocationOn,
      text: (
        <>
          SEC Headquarters,
          <br />
          7907 Makati Avenue,
          <br />
          Salcedo Village, Bel-Air,
          <br />
          Makati City 1227, Philippines
        </>
      ),
    },
    {
      icon: MdAccessTime,
      text: (
        <>
          Monday - Friday
          <br />
          8:00 AM – 5:00 PM
        </>
      ),
    },
  ];

  return (
    <footer id="footer" className="bg-dark pt-5">
      <div className="container">
        <div className="grid-box row row-cols-1">
          {/* Government Seal */}
          <div className="col footer-img-box">
            <img
              src={govSeal}
              alt="Government Seal"
              className="img-fluid mb-3 opacity-50"
            />
          </div>
          <FooterSection footerSections={footerSections} />

          <div className="col">
            <h5 className="fw-bold">Get in Touch</h5>
            <ContactColumn contactInfoData={contactInfoData} />
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-secondary mt-4">
        © 2026 Securities and Exchange Commission. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
