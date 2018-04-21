import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Links from './Links';

import '../../../grid.css';
import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      leftLinks: [
        {
          icon: <FontAwesomeIcon icon="search"/>,
          text: 'Search Sitters',
          address: 'https://www.rover.com/search/?ref=search-header',
        },
        {
          icon: <FontAwesomeIcon icon="heart"/>,
          text: 'Become a Sitter',
          address: 'https://www.rover.com/become-a-sitter/?bep=event%3Dnavigation-become-a-sitter&ref=header,'    
        },
        {
          icon: <FontAwesomeIcon icon="paw"/>,
          text: 'Our Services',
          address: 'https://www.rover.com/careers/core-values/#',
        },
      ],
      rightLinks: [
        {
          icon: '',
          text: 'Sign Up',
          address: '',
        },
        {
          icon: '',
          text: 'Sign In',
          address: '',
        },
        {
          icon: <FontAwesomeIcon icon="question-circle"/>,
          text: 'Help',
          address: '',
        },
      ],
      dropMenu: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
      dropMenu: !this.state.dropMenu,
    });
  }

  showDropMenu(dropMenu) {
    if (dropMenu) {
      return (
        <div>
          <div className="col-12">
            <Links className="col-12" links={this.state.leftLinks} />
          </div>
          <div className="col-12">
            <Links className="col-12" links={this.state.rightLinks} />
          </div>
        </div>
      );
    }
    return <div></div>;
  }
  
  render() {
    return (
      <nav>
        <ul className="row">
         <li className="col-2" id="portrait">
            <a href="https://www.rover.com/?ref=header">
              <img src="https://promoaffiliates.com/wp-content/uploads/2017/07/duo-rover@2x.d33679770b53.png" alt="rover-logo" />
            </a>
          </li>
          <div className="big-screen">
            <Links className="left-links col-2" links={this.state.leftLinks} />
            <Links className="right-links col-1" links={this.state.rightLinks} />
          </div>
          <div className="sm-screen">
            <li className="col-1">
              <button onClick={this.onClick}><FontAwesomeIcon icon="bars"/></button>
            </li>
          </div>
          <div className="drop-menu col-12">
            <div className="col-12">
             { this.showDropMenu(this.state.dropMenu) }
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

