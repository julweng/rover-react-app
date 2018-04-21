import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Hamburger = props =>
  <button onClick={props.onClick}><FontAwesomeIcon icon="bars"/></button>;

export default Hamburger;
