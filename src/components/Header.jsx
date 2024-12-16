import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="menu-items">
      <li className="menu-item">
        <NavLink to="/">Contact List</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/add">Add Contact</NavLink>
      </li>
    </ul>
  );
};

export default Header;
