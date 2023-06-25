import { useNavigate } from "react-router-dom";
import api from "../../hooks/AxiosApi";

export default function Menu() {
  const Navigate = useNavigate();

  const handleClick = (route: string) => {
    Navigate("/login");
    api
      .get("http://localhost:5000/checkAuth", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
        if (route === "login") Navigate("/login");
        else if (route === "register") Navigate("/register");
      });
  };

  return (
    <>
      <div className="Navbar__dropDownMenu">
        <button
          className="Navbar__dropDownMenu--link"
          onClick={() => handleClick("login")}
        >
          Login
        </button>
        <button
          className="Navbar__dropDownMenu--link"
          onClick={() => handleClick("register")}
        >
          Register
        </button>
      </div>
    </>
  );
}
