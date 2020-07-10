import React from 'react';
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";

import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={`page page-home`}>
        <div className="header-logo">
        logo
        </div>

        <Navbar/>

        <div className="page-screen">
          <div className="screen-content screen-content-above-fold">
            <ScrollLink
              to="belowfold"
              smooth={true}
              duration={500}
              className="scroll-link"
            >
              <div className="h1-wrap">
                <h1>
                  Header
                </h1>
              </div>
            </ScrollLink>
          </div>
        </div>
        <div className="page-screen"
          name="belowfold"
          id="belowfold"
        >
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                Header
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

export default Home;
