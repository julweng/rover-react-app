import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './Footer.css';

class Footer extends Component {
  state = {
    links: [
      {
        icon: <FontAwesomeIcon icon="briefcase" />,
        address: 'https://julweng.github.io/portfolio',
      }
    ],
  }
  render() {
    const links = this.state.links.map(link => <li><a href={link.address}>{link.icon}</a></li>);

    return (
      <div className="footer">
        <div className="col-12">
          <h4>Learn more about me</h4>
          <ul>
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;