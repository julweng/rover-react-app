import React from 'react';

const Links = (props) => {
  return (
    props.links.map(link =>
    <div className="secondary-links" key={link.text}>
      <a href={link.address}>{link.text}</a>
    </div>)
  );
};

export default Links;
