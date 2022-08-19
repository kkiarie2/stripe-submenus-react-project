import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    //console.log(e.target);
    //get text of the menu item
    const page = e.target.textContent
    //get coordinates of the menu item
    const tempBtn = e.target.getBoundingClientRect()
    /* get the center of the menu item */
    const center = (tempBtn.left + tempBtn.right)/2
    //get the bottom coordinates of the menu item
  const bottom = tempBtn.bottom -3
    console.log({tempBtn});
    openSubmenu(page, {center, bottom});
  };
  /* close submenu when hovering on the rest of the nav */
const handleSubmenu = (e) => {
  if(!e.target.classList.contains('link-btn')){
    closeSubmenu()
  }
}

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">signin</button>
      </div>
    </nav>
  );
};

export default Navbar;
