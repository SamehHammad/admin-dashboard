import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const users = await fetchUsers(q);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>
             
            </td>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <img
                    Src={user.img||"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Online" : "Offline"}</td>
              <td>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>{" "}
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
