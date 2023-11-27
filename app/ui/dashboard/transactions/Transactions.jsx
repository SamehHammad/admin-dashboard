"use client";
import styles from "./transactions.module.css";
import CircleChart from "../chart/CircleChart";
import CircleChart2 from "../chart/CircleChart2";
import CircleChart3 from "../chart/CircleChart3";
import HalfCircle from "../chart/HalfCircle";
import { useMode } from "@/app/ModeContext/ModeContext";

const Transactions = () => {
  const { mode } = useMode();
  return (
    <div
      className={mode === "dark" ? styles.containerDark : styles.containerLight}
    >
      <h2 className={mode === "dark" ? styles.titleDark : styles.titleLight}>
        Latest Transactions
      </h2>
      <CircleChart3 />
      <hr
        style={{
          color: "white",
          margin: "70px 0 30px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CircleChart />
        <HalfCircle />
        <CircleChart2 />
      </div>
    </div>
  );
};

export default Transactions;
