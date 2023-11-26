import { cards } from "@/app/lib/data";
import Card from "@/app/ui/dashboard/card/Card";
import Transactions from "@/app/ui/dashboard/transactions/Transactions";
import Chart from "@/app/ui/dashboard/chart/Chart";
import Rightbar from "../ui/dashboard/rightbar/Right";
import styles from "@/app/ui/dashboard/dashboard.module.css"


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
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
