"use client";
import React, { useState } from "react";
import styles from "@/app/ui/dashboard/permissions/permissions.module.css";
import { useMode } from "@/app/ModeContext/ModeContext";
import UserElement from "@/app/ui/dashboard/permissions/UserElement";
import { usersPer } from "@/app/lib/users.js";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
const Permissions = () => {
  const { mode } = useMode();
  const [showAlert, setShowAlert] = useState(false);
  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
    <div
      className={
        mode === "light" ? styles.containerLight : styles.containerDark
      }
    >
      <div className={styles.header}>U s e r s</div>
      {usersPer.map((user) => (
        <div key={user.name}>
          <UserElement name={user.name} img={user.img} admin={user.admin} />
        </div>
      ))}
      <div className="w-100 text-center">
        <button
          className={
            mode === "light" ? styles.saveBtnLight : styles.saveBtnDark
          }
          onClick={handleSave}
        >
          S A V E
        </button>
      </div>
      {showAlert && (
        <div className="font-regular  m-5 block w-100 rounded-lg bg-green-500 p-4 text-xl leading-5 text-white opacity-80 text-center">
          <span>All changes have been saved</span>
        </div>
      )}
    </div>
  );
};

export default Permissions;
