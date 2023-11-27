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
import ToggleButton from "@/app/dashboard/toggleButton/ToggleButton";

const Navbar = () => {
  const { mode, toggleMode } = useMode();

  const pathname = usePathname();

  const pathArray = pathname.split("/").filter(Boolean);

  const currentPage =
    pathArray.length > 0 ? pathArray[pathArray.length - 1] : "";

  return (
    <div
      className={mode === "dark" ? styles.containerDark : styles.containerLight}
    >
      <div className={mode === "dark" ? styles.titleDark : styles.titleLight}>
        {currentPage}
      </div>
      <div>
        <ToggleButton toggle={toggleMode} />
      </div>
      <div className={mode === "dark" ? styles.menuDark : styles.menuLight}>
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
