"use client";
import React from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ title, path, icon }) => {
  const myPath = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${myPath === path && styles.active}`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
