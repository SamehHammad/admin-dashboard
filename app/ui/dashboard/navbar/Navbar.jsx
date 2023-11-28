"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { useMode } from "@/app/ModeContext/ModeContext";

const Navbar = () => {
  const { mode } = useMode();

  const pathname = usePathname();

  const pathArray = pathname.split("/").filter(Boolean);

  const currentPage =
    pathArray.length > 0 ? pathArray[pathArray.length - 1] : "";

  return (
    <div
      className={mode === "dark" ? styles.containerDark : styles.containerLight}
    >
      <div className={mode === "dark" ? styles.titleDark : styles.titleLight}>
        {currentPage.toUpperCase()}
      </div>

      <div className={styles.menu}>
        <div
          className={mode === "dark" ? styles.searchDark : styles.searchLight}
        >
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className={mode === "dark" ? styles.inputDark : styles.inputLight}
          />
        </div>
        <div className={mode === "dark" ? styles.iconsDark : styles.iconsLight}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
