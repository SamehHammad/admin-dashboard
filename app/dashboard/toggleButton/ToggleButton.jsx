"use client";
import React, { useState } from "react";
import styles from "./toggleButton.module.css";
const ToggleButton = ({ handleToggle }) => {
  const [ballOn, setBallOn] = useState(false);
  const toggleBall = () => {
    setBallOn(!ballOn);
    handleToggle();
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
