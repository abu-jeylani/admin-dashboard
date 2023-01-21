import "./navbar.scss";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContex";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <Link to={"/users/abu"}>
              <img
                src="https://avatars.githubusercontent.com/u/48966850?v=4"
                alt=""
                className="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
