import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featuredchart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";
import { orders } from "../../data/orders";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget widgetType="user" />
          <Widget widgetType="order" />
          <Widget widgetType="earnings" />
          <Widget widgetType="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList rows={orders} />
        </div>
      </div>
    </div>
  );
};

export default Home;
