import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // TODO: ADD FB LOGIN
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        // logged in is default
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

// mapsStateToProps <- self expanatory name
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
