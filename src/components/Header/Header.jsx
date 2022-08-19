import React, { useState } from "react";
import "../../common/common.css";
import userDp from "../../assets/images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  activeMenu,
  getMenuStatus,
} from "../../features/functionalities/functionSlice";

const Header = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const menuStatus = useSelector(getMenuStatus);

  const handleMenu = () => {
    setActive(!menuStatus);
    dispatch(activeMenu(!menuStatus));
  };

  return (
    <section class="header">
      <div class="logo">
        <i class="ri-menu-line icon icon-0 menu" onClick={handleMenu}></i>
        <h2>
          Med<span>Ex</span>
        </h2>
      </div>
      <div class="search--notification--profile">
        <div class="search">
          <input type="text" placeholder="Search Scdule.." />
          <button>
            <i class="ri-search-2-line"></i>
          </button>
        </div>
        <div class="notification--profile">
          <div class="picon lock">
            <i class="ri-lock-line"></i>
          </div>
          <div class="picon bell">
            <i class="ri-notification-2-line"></i>
          </div>
          <div class="picon chat">
            <i class="ri-wechat-2-line"></i>
          </div>
          <div class="picon profile">
            <img src={userDp} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
