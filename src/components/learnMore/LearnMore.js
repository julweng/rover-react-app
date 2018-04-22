import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './LearnMore.css';

class LearnMore extends Component {
  state = {
    title: ` My Qualifications`,
    lists: [
    `Bachelor degree in science`,
    `learned HTML, CSS, JS, jQuery, Node.js, MongoDB, React, 
    Redux in 4 months and did 3 projects`,
    `experience in testing with Mocha, Chai, Enzyme`,
    `basic knowledge of Python (lists, tuples, arrays, dictionary) and SQL (select, where, join, etc.)`,
    ],
    pitch: `Why hire me`,
    reasons: [
      `love dogs; love cats, too`,
      `mature, flexible, considerate, open-minded`,
      `fierce learner!`,
      `I often come up with funny ideas like this refactored website`,
      `I have french bulldog pillows, use french bulldog emojis, and have a french bulldog t-shirt; 
      check out my portfolio page.`,
    ],
  }
  render() {
  const lists = this.state.lists.map(list => <li><FontAwesomeIcon icon="paw"/>&nbsp;&nbsp;&nbsp;{list}</li>);
  const reasons = this.state.reasons.map(reason => <li><FontAwesomeIcon icon="paw"/>&nbsp;&nbsp;&nbsp;{reason}</li>);

    return (
      <div className="learn-more-container">
      <div className="col-12 learn-more">
        <h4>{this.state.title}</h4>
        <ul>{lists}</ul>
      </div>
      <div className="col-12 learn-more">
        <h4>{this.state.pitch}</h4>
        <ul>{reasons}</ul>
      </div>
      </div>
    );
  }
}

export default LearnMore;
