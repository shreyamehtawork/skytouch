import React from "react";
import logo from "../assets/Skytouch.png";
import "../App.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-light rounded customnavcss"
      aria-label="Twelfth navbar example"
    >
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={logo} height={30} width={60} alt="Skytouch Logo" />
                <span className="navbar-brand-name ms-2">Skytouch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
