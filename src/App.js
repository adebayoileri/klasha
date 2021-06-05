import React from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";
import DataTable from "./components/Datatable";
import AvatarImg from "./assets/image 1.png";
import KlashaImg from "./assets/logo.png";
import NotificationIcon from "./assets/icons/Notification.png";
import ArrowDownIcon from "./assets/icons/Arrow - Down 2.svg";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const stoggle = () => {
    setShow(!show);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`mobile-sidebar`}
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <Nav isOpen={isOpen} />
      </div>
      <div className="section-dashboard">
        <div className="navigation">
          <Nav isOpen={true} />
        </div>
        <div className="section-main">
          <div className="mobile-nav">
            <img src={KlashaImg} alt="klasha logo" />

            <div>
              <input
                type="checkbox"
                name=""
                id="navi-toggle"
                class="mobile-nav__checkbox"
              />
              <label
                htmlFor="navi-toggle"
                onClick={toggle}
                className="mobile-nav__button"
              >
                <span className="mobile-nav__menu">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="content">
            <div className="top-nav">
              <div className="top-nav__info">
                <div className="top-nav__info-page">Balances</div>
                <div className="top-nav__info-date">
                  Today, 19th October 2020
                </div>
              </div>
              <div className="top-nav__actions">
                <div className="top-nav__actions-notification">
                  <span className="unread"></span>
                  <img src={NotificationIcon} alt="notification " />
                </div>
                <div className="top-nav__actions-avatar">
                  <img src={AvatarImg} alt="user avatar" />
                </div>
              </div>
            </div>

            <div className="balance-container">
              <div className="balance-box">
                <div className="balance-box-total">
                  <div className="balance-header">
                    <div className="balance-text balance-text--secondary">
                      Total account balance
                    </div>

                    <div className="select-box">
                      <div className="select-btn" onClick={stoggle}>
                        <div>
                          USD
                          <img
                            src={ArrowDownIcon}
                            className="select-icon"
                            alt="down arrow"
                          />
                        </div>
                      </div>
                      <div
                        className="select-options"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <li className="select-option">KES</li>
                        <li className="select-option">NGN</li>
                        <li className="select-option">GHC</li>
                      </div>
                    </div>

         
                  </div>
                  <div className="balance-body">
                    <div className="balance-amount">$5,332.18</div>
                    <div className="balance-convert">1 USD = 381.97 NGN</div>
                  </div>
                </div>
                <div className="balance-box-hold">
                  <div className="balance-header">
                    <div className="balance-text balance-text--hold">Funds on hold</div>
                  </div>
                  <div className="balance-body">
                    <div className="balance-amount  balance-amount--hold">$5,332.18</div>
                  </div>
                </div>
              </div>
            </div>
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
}
