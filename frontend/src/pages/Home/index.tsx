import { userContext } from "../../context/userContext";
import "./Home.scss";

const Home = () => {
  return (
    <div className="HomePage">
      <h1>Home</h1>
      <userContext.Consumer>
        {({ user }) => {
          return <p>{user ? user.name : "No user"}</p>;
        }}
      </userContext.Consumer>
    </div>
  );
};

export default Home;
