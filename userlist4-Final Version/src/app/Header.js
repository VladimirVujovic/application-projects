import React from 'react';

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">Bit Persons</h1>
      <i className="fas fa-list buttonHeader" onClick={props.handler} />

    </header>
  );
};

export default Header;
