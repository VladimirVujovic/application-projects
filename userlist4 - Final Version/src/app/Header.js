import React from 'react';

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title h1">BIT People</h1>

      {props.change
        ? <i className="fas fa-list buttonHeader1" onClick={props.handler} />
        : <i className="fas fa-th buttonHeader1" onClick={props.handler} />}
      <i className="far fa-redo-alt buttonHeader2" onClick={props.refresh} />

    </header>
  );
};

export default Header;
