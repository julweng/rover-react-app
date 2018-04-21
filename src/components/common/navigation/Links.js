import React from 'react';
import '../../../grid.css';

const Links = (props) => {
  return (
    props.links.map(link =>
      <li key={link.text} className={props.className}><a href={link.address}><span>{link.icon}</span>{link.text}</a></li>)
  );
};

export default Links;
