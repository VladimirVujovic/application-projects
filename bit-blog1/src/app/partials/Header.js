import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light header">
        <div class="collapse navbar-collapse" id="navbarNav">
          <h1>BIT BLOG</h1>
          <div className="right">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" />

              <Link class="nav-link" to="/Authors">Authors</Link>
              <li class="nav-item">
                <Link class="nav-link" to="/About">About</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
