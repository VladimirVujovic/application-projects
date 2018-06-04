import React from 'react';
import PropTypes from 'p';
const Footer = props => {
  return (
    <div className="App-header">
      <h4 className="footer">@2018 Copyright {props.name}</h4>
    </div>
  );
};

export default Footer;
