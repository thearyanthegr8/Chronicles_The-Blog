import React from "react";
import "./Sidebar.scss";
import { userContext } from "../../context/userContext";
import SidebarButton from "./SidebarButton";
import api from "../../hooks/AxiosApi";

function Sidebar({ closeSidebar }: { closeSidebar: () => void }) {
  const value = React.useContext(userContext);

  const handleLogout = () => {
    api.get("http://localhost:5000/logout", { withCredentials: true });
    window.location.reload();
  };

  return (
    <div onClick={() => closeSidebar()} className="Sidebar__background">
      <section className="Sidebar">
        <div className="Sidebar__header">
          <div className="Sidebar__header--info">
            <img
              src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${value.user?.username}`}
              alt="Avatar"
              className="Sidebar__header--avatar"
            />
            <div className="Sidebar__header--info-details">
              <p>{value.user?.name}</p>
              <p>{value.user?.email}</p>
            </div>
          </div>
          <button
            className="Sidebar__header--close"
            onClick={() => closeSidebar()}
          >
            <span data-icon={String.fromCharCode(58829)} />
          </button>
        </div>
        <div className="Sidebar__body">
          <SidebarButton title="Profile" icon={59389} />
          <SidebarButton title="My Blogs" icon={59597} />
          <hr className="Sidebar__body--divider" />
          <SidebarButton title="Sign Out" icon={59834} onClick={handleLogout} />
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
