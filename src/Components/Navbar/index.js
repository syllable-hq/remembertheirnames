import React, { Component } from "react";
import { Link } from '@reach/router'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-content" id="navbar">
        <ul className="menu-ul">
          <li className="menu-li">
            <Link to="/about" >
              About
            </Link>
          </li>
          <li className="menu-li">
            <Link to="/memorial" >
              Memorial
            </Link>
          </li>
          <li className="menu-li">
            <a href="https://twitter.com/XXXXXX" target="_blank" rel="noopener noreferrer">
              <span className="menu-item__icon icon-twitter"></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}