import { logo } from "../utils/images";
import { Link } from "react-router-dom";
import { hederMenu } from "../data.json";
import { useState } from "react";
import { useCart } from "../utils/CartContext";

import { HeaderCartIcon } from "./common/HeaderCartIcon";
import CartDrawer from "./CartDrawer";
import Announcement from "./Announcement";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems, setIsDrawerOpen } = useCart();

  return (
    <header className="header">
      <Announcement />
      <div className="container">
        <div className="header-con">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Bulgari" title="Bulgari" width={155} />
            </Link>
          </div>

          <nav className="nav-menu headermenu">
            <ul>
              {hederMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.path || "#"}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="top-icons">
            <ul>
              <li>
                <Link>
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.28271 21.875C5.28271 17.8479 8.59395 14.5833 12.6785 14.5833C16.7632 14.5833 20.0744 17.8479 20.0744 21.875M16.9047 7.29167C16.9047 9.59285 15.0126 11.4583 12.6785 11.4583C10.3445 11.4583 8.45236 9.59285 8.45236 7.29167C8.45236 4.99048 10.3445 3.125 12.6785 3.125C15.0126 3.125 16.9047 4.99048 16.9047 7.29167Z"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <HeaderCartIcon />
              </li>
            </ul>
            <div className="hamburger" onClick={() => setDrawerOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Slide Drawer */}
          <div className={`drawer ${drawerOpen ? "open" : ""}`}>
            <div className="drawer-header">
              <span onClick={() => setDrawerOpen(false)} className="close-btn">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M7 17L16.8995 7.10051"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7.00001L16.8995 16.8995"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <ul>
              {hederMenu.map((item, i) => (
                <li key={i} onClick={() => setDrawerOpen(false)}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Backdrop */}
          {drawerOpen && (
            <div className="backdrop" onClick={() => setDrawerOpen(false)} />
          )}
        </div>
      </div>
      <CartDrawer />
    </header>
  );
}
