import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../common/common.css";
import { getMenuStatus } from "../../features/functionalities/functionSlice";

const Sidebar = () => {
  const menuStatus = useSelector(getMenuStatus);

  return (
    <div className={menuStatus ? "sidebar active" : "sidebar"}>
      <ul class="sidebar--items">
        <li>
          <Link to={"/"}>
            <span class="icon icon-1">
              <i class="ri-layout-grid-line"></i>
            </span>
            <span class="sidebar--item">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/patients"}>
            <span class="icon icon-2">
              <i class="ri-calendar-2-line"></i>
            </span>
            <span class="sidebar--item">Schedules</span>
          </Link>
        </li>
        <li>
          <Link to={"/medicines"}>
            <span class="icon icon-3">
              <i class="ri-user-2-line"></i>
            </span>
            <span class="sidebar--item" style={{ whiteSpace: "nowrap" }}>
              Medicines
            </span>
          </Link>
        </li>
        <li>
          <Link to={"/patients"}>
            <span class="icon icon-4">
              <i class="ri-user-line"></i>
            </span>
            <span class="sidebar--item">Patients</span>
          </Link>
        </li>
        <li>
          <a href="">
            <span class="icon icon-5">
              <i class="ri-line-chart-line"></i>
            </span>
            <span class="sidebar--item">Activity</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon icon-6">
              <i class="ri-customer-service-line"></i>
            </span>
            <span class="sidebar--item">Support</span>
          </a>
        </li>
      </ul>
      <ul class="sidebar--bottom-items">
        <li>
          <a href="">
            <span class="icon icon-7">
              <i class="ri-settings-3-line"></i>
            </span>
            <span class="sidebar--item">Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon icon-8">
              <i class="ri-logout-box-r-line"></i>
            </span>
            <span class="sidebar--item">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
