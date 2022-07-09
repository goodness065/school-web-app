import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Icons/logo.svg";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav className="container nav">
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-link-con">
        <ul className="link-con">
          <Link to="/signin" className="link">
            <li className="link-sub-1 link-space">Sign In</li>
          </Link>
          <Link to="/signup" className="link">
            <li className="link-sub-1">Sign Up</li>
          </Link>
        </ul>
        <ul className="link-con">
        <Link to="/courseReg" className="link2"><li className="link-sub-2 link-space">Course Registeration</li></Link>
        <Link to="/time-table" className="link2"><li className="link-sub-2 link-space">Time Table</li></Link>
        <Link to="/course" className="link2"><li className="link-sub-2">Courses</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
