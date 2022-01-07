import React from "react";
import "./nav.css";
import NavItem from "./NavItems";

const Nav = () => {
   return (
      <>
         <nav className="navbar">
            <ul className="navbar-nav">
               <NavItem />
            </ul>
         </nav>
      </>
   );
};

export default Nav;
