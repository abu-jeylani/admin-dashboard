import { FC } from "react";
import "./widget.scss";
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  Person2Outlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { WidgetType, WidgetData } from "../../types/widget";

interface IProps {
  widgetType?: WidgetType;
}

const Widget: FC<IProps> = ({ widgetType }) => {
  let data: WidgetData;

  let amount = 100;
  let diff = 20;

  switch (widgetType) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <Person2Outlined className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartCheckoutOutlined className="icon" />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlined className="icon" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data!.title}</span>
        <span className="counter">
          {data!.isMoney && "$"} {amount}
        </span>
        <span className="link">{data!.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data!.icon}
      </div>
    </div>
  );
};

export default Widget;
