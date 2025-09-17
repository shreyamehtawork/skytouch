import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="text-center footer">
      <div className=" copyright">© {year} by Skytouch Pvt.Ltd.</div>

      <div className="cs-social mb-4">
        <a
          href="#"
          aria-label="instagram"
          className="me-3"
          style={{ color: "black" }}
        >
          Instagram
        </a>
        <a
          href="#"
          aria-label="facebook"
          className="me-3"
          style={{ color: "black" }}
        >
          Facebook
        </a>
        <a href="#" aria-label="twitter" style={{ color: "black" }}>
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
