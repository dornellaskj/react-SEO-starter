import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>SEO Starter</h1>
        <nav>
        <input type="checkbox" id="checkbox_toggle"/>
          <div className="nav-container">
            <a href="/">Home</a>
          </div>
          <label htmlFor="checkbox_toggle" className="hamburger">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
          </label>
        </nav>
      </header>
    );
  }
}

export default Header;


