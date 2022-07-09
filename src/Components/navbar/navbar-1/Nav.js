import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Icons/logo.svg";
import bell from "../../../Assets/Icons/bell.svg";
import user from "../../../Assets/Icons/user.svg";
import "../styles/nav.css";

const Nav = ({class1, class2, class3}) => {
  return (
    <>
      <nav className="container nav">
        <div>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-link-con">
          <ul className="link-con">
            <Link to="/courseReg" className="link2"><li className={`link-sub-2 link-space ${class1}`}>Course Registeration</li></Link>
            <Link to="/time-table" className="link2"><li className={`link-sub-2 link-space ${class2}`}>Time Table</li></Link>
            <Link to="/course" className="link2"><li className={`link-sub-2 ${class3}`}>Courses</li></Link>
          </ul>
        </div>
      </nav>
      <div className="nav2-container container">
        <div className="nav2-left">
          <div className="nav2-img-con">
            <img src={user} alt="#" className="user-img" />
          </div>
          <p className="nav2-title">Hello name Surname, </p>
        </div>
        <div className="nav2-right">
          <img src={bell} alt="#" className="bell-img" />
          <Link to="/home" className="link"><p className="sign-out">Sign out</p></Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
