import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import "./Header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
          <Link className="option" to="/shop">shop</Link>
          <Link className="option" to="/shop">contact</Link>
          {/* <Link className="option" to="/shop">SHOP</Link> */}
      </div>
    </div>
  );
};

export default Header;
