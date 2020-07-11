import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";
import axios from 'axios';
import './index.scss';

const stagingSiteServer = 'http://localhost:5000';

class Query extends React.Component {
constructor(props) {
  super(props)
    this.state = {
      souls: [],
    }
  }

  componentDidMount() {
    axios.get(`${stagingSiteServer}/api/souls`)
    .then(response => {
      this.setState({
        souls: response.data,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className={`page page-query`}>
        <Navbar/>

        <div className="page-screen"
          name="belowfold"
          id="belowfold"
        >
          <div className="screen-content screen-content-below-fold">
            <div className="content-section">
              <h2 className="h2">
                In Memoriam
              </h2>
              {
                this.state.souls &&
                <ul className="query-list">
                {
                  this.state.souls.map( (soul, idx) => (
                    <li key={`soul-${idx}`}>
                      <div>
                        Name: {soul.name}
                      </div>
                      <div>
                        Born on: {soul.birthDate}
                      </div>
                      <div>
                        Died on: {soul.deathDate}
                      </div>
                    </li>
                  ))
                }
                </ul>
              }
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

export default Query;
