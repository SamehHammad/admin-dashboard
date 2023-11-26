import React from "react";
import styles from "../sidebar/sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,

} from "react-icons/md";
import MenuLink from "./menuLink/MenuList";
const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
              <img className={ styles.userImg} src="/noavatar.png" alt="" width={50} height={50} />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Sameh Hammad</span>
          <span className={styles.userTitle}>Front-end Developer</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.title}
            <span className={styles.cat}>
              {cat.list.map((item) => (
                <MenuLink
                  title={item.title}
                  path={item.path}
                  icon={item.icon}
                  key={item.title}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
