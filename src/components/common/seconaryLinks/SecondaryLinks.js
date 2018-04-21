import React, { Component } from 'react';
import Links from './Links';
import './SecondaryLinks.css';

class SecondaryLinks extends Component {
  state = {
    links: [
      {
        text: 'Careers',
        address: 'https://www.rover.com/careers/',
      },
      {
        text: 'Engineering',
        address: 'https://www.rover.com/careers/engineering/',
      },
      {
        text: 'Values',
        address: 'https://www.rover.com/careers/core-values/',
      },
      {
        text: 'Perks',
        address: 'https://www.rover.com/careers/perks-and-culture/',
      },
      {
        text: 'Jobs',
        address: 'https://www.rover.com/careers/search/',
      },
    ],
  }

  render() {
    return (
      <div className="row" id="secondary-container">
        <div className="col-12">
          <Links links={this.state.links} />
        </div>  
      </div>
    )
  }
}

export default SecondaryLinks;
