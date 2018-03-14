import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top ">
          <a className="navbar-brand" href="">&Sigma;p</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <form className="form-inline mt-2 mt-md-0 mr-auto">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><span className="oi oi-magnifying-glass"></span></button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav mr-0">
              <li className="nav-item">
                <a className="nav-link" href="">Articles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Discuss</a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href=""> | </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><span className="oi oi-person"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
