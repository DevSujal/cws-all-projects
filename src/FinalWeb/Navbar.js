import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/"> */}
            <b className="mx-3"><i>{props.title.toUpperCase()}</i></b>
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active style" aria-current="page" to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link style" to="/About">
                    <span>Registration Form</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link style" to="/Practical7">
                   <span>Conditional Rendering</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link style" to="/Counter">
                    <span>Counter</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link style" to="/Discount">
                    <span>Discount Calculator</span>
                  </Link>
                </li>
              </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title",
};
