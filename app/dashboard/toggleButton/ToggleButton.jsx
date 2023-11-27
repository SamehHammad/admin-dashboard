"use client";
import React, { useState } from "react";
import styles from "./toggleButton.module.css";
import { useMode } from "@/app/ModeContext/ModeContext";
const ToggleButton = () => {
  const { mode, toggleMode } = useMode();
  const [ballOn, setBallOn] = useState(false);
  const toggleBall = () => {
    setBallOn(!ballOn);
    toggleMode();
  };
  return (
    <div
      className={!ballOn ? styles.containerOff : styles.containerOn}
      onClick={toggleBall}
    >
      <div className={!ballOn ? styles.ballOff : styles.ballOn}></div>
    </div>
  );
};

export default ToggleButton;
