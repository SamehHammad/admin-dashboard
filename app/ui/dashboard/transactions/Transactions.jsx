import Image from "next/image";
import styles from "./transactions.module.css";
import CircleChart from "../chart/CircleChart";
import CircleChart2 from "../chart/CircleChart2";
import CircleChart3 from "../chart/CircleChart3";
import HalfCircle from "../chart/HalfCircle";
import Chart from "../chart/Chart";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <CircleChart3 />
      <hr style={{color:"white",margin:"70px 0 30px"}}/>
      <div style={{display:"flex",justifyContent:"space-between"}}>

      <CircleChart/>
      <HalfCircle/>
      <CircleChart2/>
      </div>
    </div>
  );
};

export default Transactions;
