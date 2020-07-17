import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import axios from 'axios';

const stagingSiteServer = 'http://localhost:5000';

class Query extends React.Component {
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
    const records = this.state.records;
    return (
      <div className={`page page-query`}>

        <div className="page-screen">
          <div className="screen-content">
            <div className="content-section">
              <div className="memorial-list-wrap">
                {
                  records.length > 0 &&
                  <ul className="memorial-list">
                  {
                    records.map((record, idx) => (
                      <li key={`record-${idx}`}>
                        <div>
                          Name: {record.name}
                        </div>
                        <div>
                          Born on: {record.birthDate}
                        </div>
                        <div>
                          Died on: {record.deathDate}
                        </div>
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

export default Query;
