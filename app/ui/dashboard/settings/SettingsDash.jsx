"use client";
import React from "react";
import styles from "./settings.module.css";
import { MdOutlineLanguage } from "react-icons/md";
import ToggleButton from "@/app/dashboard/toggleButton/ToggleButton";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineEditNotifications } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdWorkspacePremium } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";
import { useMode } from "@/app/ModeContext/ModeContext";

const SettingsDash = () => {
  const { mode, toggleMode } = useMode();
  const anableNotif = () => console.log("notifications anabled");
  return (
    <div
      className={
        mode === "light" ? styles.containerLight : styles.containerDark
      }
    >
      <ul>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <MdOutlineDarkMode className={styles.icon} />
              Dark Mode :
            </div>
            <div className={`${styles.tow} ${styles.switch}`}>
              <ToggleButton handleToggle={toggleMode} />
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <MdWorkspacePremium className={styles.icon} />
              User Permissions and Access Control :
            </div>
            <div className={`${styles.tow} ${styles.switch}`}>
              <Link href="/dashboard/settings/permissions">
                <MdManageAccounts style={{ fontSize: "55px" }} />
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <MdOutlineEditNotifications className={styles.icon} />
              Notifications :
            </div>
            <div className={`${styles.tow} ${styles.switch}`}>
              <ToggleButton handleToggle={anableNotif} />
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <LuDatabaseBackup className={styles.icon} />
              API Key Management :
            </div>
            <div className={`${styles.tow} ${styles.switch}`}>
              <Link href="https://cloud.mongodb.com/v2/655f916f0596573e97567856#/metrics/replicaSet/655f933b664bef2a18e48f2a/explorer/dashboard">
                <button
                  className={
                    mode === "light" ? styles.btnLight : styles.btnDark
                  }
                >
                  Check
                </button>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <MdOutlineEditNotifications className={styles.icon} />
              Notifications :
            </div>
            <div className={`${styles.tow} ${styles.switch}`}>
              <ToggleButton />
            </div>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <MdOutlineLanguage className={styles.icon} />
              Language :
            </div>
            <div className={styles.tow}>
              <select name="cat" id="cat" className={styles.select}>
                <option value="arabic" className={styles.option}>
                  اللغه العربيه
                </option>
                <option value="english" className={styles.option}>
                  English
                </option>
              </select>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SettingsDash;
