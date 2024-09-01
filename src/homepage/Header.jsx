import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <div className="collapse navbar-collapse  " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-current="page">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" aria-current="page">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
