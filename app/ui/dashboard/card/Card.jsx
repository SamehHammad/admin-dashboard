"use client";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { useMode } from "@/app/ModeContext/ModeContext";

const Card = ({ item }) => {
  const { mode } = useMode();
  return (
    <div
      className={mode === "dark" ? styles.containerDark : styles.containerLight}
    >
      <MdSupervisedUserCircle size={24} />
      <div className={mode === "dark" ? styles.textsDark : styles.textsLight}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span
          className={mode === "dark" ? styles.detailDark : styles.detailLight}
        >
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
