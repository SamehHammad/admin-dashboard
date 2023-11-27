"use client"
import React, { useState, useEffect } from 'react';
import styles from "./settings.module.css";
import { MdOutlineLanguage } from "react-icons/md";
import ToggleButton from '@/app/dashboard/toggleButton/ToggleButton';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineEditNotifications } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdWorkspacePremium } from "react-icons/md";
import Link from 'next/link';

const SettingsDash = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${styles.container} ${theme==="light"?styles.light:styles.dark}`}>
      <ul>
      <li className={styles.li}>
        <div className={styles.element}>
            <div className={styles.one}>
            <MdOutlineLanguage 
 className={styles.icon} />
          Language :
        </div>
        <div className={styles.tow}>
        <select name="cat" id="cat" className={styles.select}>
          <option value="arabic" className={styles.option}>اللغه العربيه</option>
          <option value="english" className={styles.option}>English</option>
        </select>
        </div>
      </div>
        </li>
        <li className={styles.li}>
        <div className={styles.element}>
            <div className={styles.one}>
            <MdOutlineDarkMode className={styles.icon}/>
          Dark Mode :
        </div>
        <div className={`${styles.tow } ${styles.switch}`}>
      <ToggleButton toglleMode={toggleMode}/>
        </div>
      </div>
        </li>
        <li className={styles.li}>
        <div className={styles.element}>
        <div className={styles.one}>
              <MdOutlineEditNotifications className={styles.icon} />
              Notifications :
        </div>
        <div className={`${styles.tow } ${styles.switch}`}>
      <ToggleButton/>
        </div>
      </div>
        </li>
        <li className={styles.li}>
        <div className={styles.element}>
            <div className={styles.one}>
            <LuDatabaseBackup className={styles.icon}/>

        API Key Management :
        </div>
        <div className={`${styles.tow } ${styles.switch}`}>
              <Link href="https://cloud.mongodb.com/v2/655f916f0596573e97567856#/metrics/replicaSet/655f933b664bef2a18e48f2a/explorer/dashboard">
                <button className={styles.btn}>
                  Check
                </button>
              </Link>
        </div>
      </div>
        </li>
        <li className={styles.li}>
        <div className={styles.element}>
            <div className={styles.one}>
            <MdWorkspacePremium className={styles.icon}/>

        User Permissions and Access Control :

</div>
        <div className={`${styles.tow } ${styles.switch}`}>
        <Link href="">
                <button className={styles.btn}>
                  Update
                </button>
              </Link></div>
      </div>
      </li>
      <li className={styles.li}>
        <div className={styles.element}>
        <div className={styles.one}>
              <MdOutlineEditNotifications className={styles.icon} />
              Notifications :
        </div>
        <div className={`${styles.tow } ${styles.switch}`}>
      <ToggleButton/>
        </div>
      </div>
        </li>
        
     </ul>
    </div>
  )
}

export default SettingsDash