import { userContext } from "../../context/userContext";
import React from "react";
import "./Home.scss";

const Home = () => {
  const value = React.useContext(userContext);
  return (
    <div className="HomePage">
      <h1>Home</h1>
      <p>{value ? value.user?.name : "No user"}</p>
    </div>
  );
};

export default Home;
