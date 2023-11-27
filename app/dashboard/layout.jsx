"use client";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Sidebar from "@/app/ui/dashboard/sidebar/Sidebar";
import Navbar from "@/app/ui/dashboard/navbar/Navbar";
import Footer from "@/app/ui/dashboard/footer/Footer";
import { useMode } from "../ModeContext/ModeContext";

const Layout = ({ children }) => {
  const { mode } = useMode();
  return (
    <div
      className={mode === "dark" ? styles.containerDark : styles.containerLight}
    >
      <div className={mode === "dark" ? styles.menuDark : styles.menuLight}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <hr />
        <hr />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
