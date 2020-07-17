import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import axios from 'axios';
import './index.scss';

const stagingSiteServer = 'http://localhost:5000';

class Home extends React.Component {
constructor(props) {
  super(props)
    this.state = {
      records: [],
    }
  }

  componentDidMount() {
    axios.get(`${stagingSiteServer}/records`)
    .then(response => {
      this.setState({
        records: response.data,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className={`page page-home`}>
        <Navbar/>
        <div className="page-screen">
          <div className="screen-content">
            <div className="content-section">
              <div className="title-wrap">
                <h1 className="h1">
                  Remember Their Names
                </h1>
                <h3 className="h3 subtitle">
                  An open-source tool for memorializing lost lives.
                </h3>
              </div>
              <p>
                <i>Remember Their Names</i> is a tool for sharing stories about those we have lost. It empowers a community to build a collective memorial  invites others to remember  demand justice for lives lost to injustice.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                Inspiration
              </h2>
              <p>
                The <a href="https://en.wikipedia.org/wiki/Black_Lives_Matter">Black Lives Matter</a> movement has sparked many "Say Their Names" projects which memorialize the lives of black persons murdered by police officers.
              </p>
              <p>
                But how does a community collectively record and update these names and stories? This project aims to provide a community-managed source of truth to honor these names justly.
              </p>
            </div>
            <div className="content-section">
              <h2 className="h2">
                What does it do?
              </h2>
              <p>
                Todo: Update.
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
