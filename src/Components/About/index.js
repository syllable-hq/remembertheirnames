import React from 'react';
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";

import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className={`page page-about`}>
        <div className="header-logo">
        logo
        </div>
        <Navbar/>
        <div className="page-screen">
          <div className="screen-content">
            <div className="content-section">
              <h2 className="h2">
                About
              </h2>

              <p>
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-inner">
            <Link
                to="/"
              >
                logo
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
