import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilEstate } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  //  <link to = "Customers"></link>
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.heading}>
              {<table />}
              <div
                className={selected === index ? "menuItem action" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </Link>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
