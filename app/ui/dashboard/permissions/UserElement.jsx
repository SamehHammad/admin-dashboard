import React, { useState } from "react";
import styles from "@/app/ui/dashboard/permissions/permissions.module.css";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { useMode } from "@/app/ModeContext/ModeContext";
const UserElement = ({ name, img, admin }) => {
  const { mode } = useMode();
  const [isAdmin, setIsAdmin] = useState(admin);

  return (
    <div className="container">
      <ul>
        <li className={styles.li}>
          <div className={styles.element}>
            <div className={styles.one}>
              <div>
                {isAdmin ? <HiBadgeCheck className={styles.shara} /> : ""}
              </div>
              <img src={img || "/noavatar.png"} className={styles.img} />
              <h1 className={styles.title}>{name}</h1>
            </div>
            <div className={styles.middle}>
              {isAdmin ? (
                <MdOutlineAdminPanelSettings className={styles.btnIcon} />
              ) : (
                ""
              )}
            </div>
            <div className={styles.tow}>
              {isAdmin ? (
                <button
                  className={
                    mode === "light" ? styles.btnLight : styles.btnDark
                  }
                  onClick={() => setIsAdmin(!isAdmin)}
                >
                  Remove Admin
                </button>
              ) : (
                <button
                  className={
                    mode === "light" ? styles.btnLight : styles.btnDark
                  }
                  onClick={() => setIsAdmin(!isAdmin)}
                >
                  Hire an Admin
                </button>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserElement;
