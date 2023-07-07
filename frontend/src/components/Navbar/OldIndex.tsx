import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Switch from "react-switch";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import Menu from "./Menu";
import { userContext } from "../../context/userContext";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChanged = () => {
    setChecked(!checked);
  };

  const dropDownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = React.useState(false);

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropDownRef, closeHoverMenu);

  const value = React.useContext(userContext);

  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__left">
          <div className="Navbar__left--logo">
            <Link to="/">Chronicles - The Blog</Link>
          </div>
          <div className="Navbar__left--links">
            <Link to="/" className="Navbar__left--links-link">
              Articles<sup>(10)</sup>
            </Link>
            <Link to="/" className="Navbar__left--links-link">
              Podcast<sup>(5)</sup>
            </Link>
            {value.user ? (
              <></>
            ) : (
              <Link
                to="/"
                className="Navbar__left--links-link Navbar__left--links-dropDownArrow"
                onMouseOver={() => setMenuDropDownOpen(true)}
                ref={dropDownRef}
              >
                Be a writer <span data-icon={String.fromCharCode(58831)} />
                {isMenuDropDownOpen && <Menu />}
              </Link>
            )}
            <Link to="/" className="Navbar__left--links-link">
              Talk to us
            </Link>
            <Link to="/createBlog" className="Navbar__left--links-link">
              Create Blog
            </Link>
          </div>
        </div>
        <div className="Navbar__right">
          <Switch
            onChange={() => handleChanged()}
            checked={checked}
            handleDiameter={10}
            height={20}
            width={40}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor="#000000"
            onColor="#fff"
            offHandleColor="#fff"
            onHandleColor="#000000"
          ></Switch>
          {value.user ? (
            <div className="Navbar__right--user">
              {value.user ? (
                <button
                  className="Navbar__right--user-button"
                  onClick={() => setSidebarOpen(true)}
                >
                  <img
                    src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${value.user.username}`}
                    alt="User avatar"
                  />
                </button>
              ) : (
                <></>
              )}
            </div>
          ) : null}
        </div>
      </nav>
      {isSidebarOpen ? (
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
