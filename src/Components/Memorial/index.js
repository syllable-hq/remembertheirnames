import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import { Link as ScrollLink } from "react-scroll";
import axios from 'axios';
import './index.scss';

const stagingSiteServer = 'http://localhost:5000';
// const recordSet = 'records';
const recordSet = 'records-long';

class Memorial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      records: [],
    }
  }

  componentDidMount() {
    axios.get(`${stagingSiteServer}/${recordSet}`)
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
    const records = this.state.records;
    debugger;
    return (
      <div className={`page page-memorial`}>

        <div className="page-screen">
          <div className="screen-content">
            <div className="content-section">
              <div className="memorial-list-wrap">
                {
                  records.length > 0 &&
                  <ul className="memorial-list">
                  {
                    records.map((record, idx) => (
                      <li key={`record-${idx}`} className="memorial-list-item">
                        {
                          <span>•</span>
                        }
                        {record.name}
                      </li>
                    ))
                  }
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Memorial;
