import "./sidebar.scss";
import {
  Dashboard,
  GroupRounded,
  Inventory2Outlined,
  ShoppingCartRounded,
  LocalShippingRounded,
  LeaderboardSharp,
  NotificationsActiveRounded,
  HealthAndSafetyRounded,
  ArticleRounded,
  DisplaySettingsRounded,
  ManageAccountsRounded,
  ExitToAppRounded,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContex";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          {" "}
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>

          <li>
            <Link to={`/users`} style={{ textDecoration: "none" }}>
              <GroupRounded className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartRounded className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRounded className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <LeaderboardSharp className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveRounded className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyRounded className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <ArticleRounded className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <DisplaySettingsRounded className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsRounded className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRounded className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
