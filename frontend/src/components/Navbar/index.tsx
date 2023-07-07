import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Switch from "react-switch";
import { userContext } from "../../context/userContext";
import Sidebar from "../Sidebar";
import * as fontAwesomeIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChanged = () => {
    setChecked(!checked);
  };

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const value = React.useContext(userContext);

  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__left">
          <div className="Navbar__left--links">
            <Link to="/" className="Navbar__left--links-link">
              Articles<sup>(10)</sup>
            </Link>
            <Link to="/" className="Navbar__left--links-link">
              Podcast<sup>(5)</sup>
            </Link>
            <Link to="/" className="Navbar__left--links-link">
              Talk to us
            </Link>
          </div>
        </div>
        <div className="Navbar__center">
          <Link to="/">Chronicles</Link>
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
            <>
              <div className="Navbar__right--user">
                <button
                  className="Navbar__right--user-button"
                  onClick={() => setSidebarOpen(true)}
                >
                  <img
                    src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${value.user.username}`}
                    alt="User avatar"
                  />
                </button>
              </div>
              <Link to="/" className="Navbar__right--button">
                <button>
                  <FontAwesomeIcon
                    icon={fontAwesomeIcons.faPenToSquare}
                    className="Navbar__right--button-icon"
                  />
                  Write
                </button>
              </Link>
            </>
          ) : (
            <Link to="/login" className="Navbar__right--button">
              <button>
                <FontAwesomeIcon
                  icon={fontAwesomeIcons.faArrowRightToBracket}
                  className="Navbar__right--button-icon"
                />
                Login
              </button>
            </Link>
          )}
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
