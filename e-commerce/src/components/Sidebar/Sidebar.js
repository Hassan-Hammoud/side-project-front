import { React, useState } from "react";
import './Sidebar.css'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaThList,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";


const Sidebar = ({ children }) => {
    // <Outlet/>
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },

    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },

    {
      path: "/productList",
      name: "ProductList",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "110px" : "-5px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      {/* <h1 className="Dash">Dashboard page</h1> */}
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
