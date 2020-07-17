import React, { lazy, Suspense } from 'react'
import Navbar from "../Navbar";
import { Link } from '@reach/router'
import axios from 'axios';
import moment from 'moment';
import './index.scss';

const stagingSiteServer = 'http://localhost:5000';

class Tribute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      record: [],
    }
  }

  componentDidMount() {
    const recordId = this.props.recordId;

    axios.get(`${stagingSiteServer}/records/${recordId}`)
    .then(response => {
      this.setState({
        record: response.data,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const record = this.state.record;

    return (
      <div className={`page page-tribute`}>
        <div className="page-screen">
          <div className="screen-content">
            <div className="tribute-content tribute-content-single">
              <div className="tribute-header">
                <span>
                  In memory of
                </span>
                <span className="memorial-name">{record.name}</span>
              </div>
              <span className="life-dates">
                {
                  `${moment(record.birthDate).format('MMMM Do, YYYY')} —  ${moment(record.deathDate).format('MMMM Do, YYYY')}`
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tribute;
