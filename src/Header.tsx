import * as React from "react";
import { Link } from "react-router-dom";
export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/location">
              Add Location
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/operationarea">
              Add Operation Area
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              ContactUs
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
