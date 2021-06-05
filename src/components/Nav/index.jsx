import React from "react";
import KlashaImg from "../../assets/logo.png";
import DashboardIcon from "../../assets/icons/icon.svg";
import ActivityIcon from "../../assets/icons/Activity.svg";
import GroupIcon from "../../assets/icons/3 User.svg";
import WalletIcon from "../../assets/icons/Wallet.svg";
import CallIcon from "../../assets/icons/Call.svg";
import FilterIcon from "../../assets/icons/Filter.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";
import StarIcon from "../../assets/icons/Star.svg";

export default function Nav({ isOpen }) {
  return (
    <div>
      <div className="navigation__logo">
        <img src={KlashaImg} alt="klasha logo" />
      </div>

      <div className="navigation__box ">
        <ul className="navigation__list">
          <a href="#sea" className="navigation__header">
            Main pages
          </a>
          <li className="navigation__item navigation__item--dashboard">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={DashboardIcon} alt="dashboard_icon" />
              </div>
              Dashboard
            </a>
          </li>
          <li className="navigation__item navigation__item--active">
            <a href="#dashboard" className="navigation__link">
              {" "}
              <div className="navigation__icon">
                <img src={WalletIcon} alt="wallet_icon" />
              </div>{" "}
              Balances
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={GroupIcon} alt="group_icon" />
              </div>
              Customers
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={ActivityIcon} alt="activity_icon" />
              </div>
              Analytics
            </a>
          </li>
        </ul>

        <ul className="navigation__list">
          <a href="#sea" className="navigation__header">
            General
          </a>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={FilterIcon} alt="setting_icon" />
              </div>
              Settings
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              {" "}
              <div className="navigation__icon">
                <img src={StarIcon} alt="star_icon" />
              </div>{" "}
              Team
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={CallIcon} alt="call_icon" />
              </div>
              Contact
            </a>
          </li>
          <li className="navigation__item">
            <a href="#dashboard" className="navigation__link">
              <div className="navigation__icon">
                <img src={LogoutIcon} alt="logout_icon" />
              </div>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
