import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="Navbar__dropDownMenu">
        <Link to="/login" className="Navbar__dropDownMenu--link">
          Login
        </Link>
        <Link to="/register" className="Navbar__dropDownMenu--link">
          Register
        </Link>
      </div>
    </>
  );
}
