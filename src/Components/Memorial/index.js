import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import axios from 'axios';
import './index.scss';

const stagingSiteServer = 'http://localhost:5000';

class Memorial extends React.Component {
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
      <div className={`page page-memorial`}>
        <div className="page-screen">
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
                    <Link to={`/memorial/tributes/${record.id}`} className="tribute-content">
                      {record.name}
                    </Link>
                  </li>
                ))
              }
              </ul>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Memorial;
