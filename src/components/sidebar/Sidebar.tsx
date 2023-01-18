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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        {" "}
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <GroupRounded className="icon" />
            <span>Users</span>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
