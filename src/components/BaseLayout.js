import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/bootstrap.css'
import '../styles/bootstrap-grid.css'


class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Routes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item m-2">
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink activeClassName="selected" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink activeClassName="selected" to="/references">References</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
