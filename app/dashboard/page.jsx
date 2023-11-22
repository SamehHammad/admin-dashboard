import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            item={{ title: "sameh", number: 5, details: "jlkg", change: 52 }}
          />
          <Card
            item={{ title: "sameh", number: 5, details: "jlkg", change: 52 }}
          />
          <Card
            item={{ title: "sameh", number: 5, details: "jlkg", change: 52 }}
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
