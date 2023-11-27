import Link from "next/link";
import styless from "@/app/ui/dashboard/transactions/transactions.module.css";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/itemPagination/ItemPagination";
import Search from "@/app/ui/dashboard/search/Search";
import { fetchTransactions } from "@/app/lib/data";

const TransactionPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, transactions } = await fetchTransactions(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a transaction..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>title</td>
            <td>Category</td>
            <td>Price</td>
            <td> Status</td>
            <td>Client</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.product}>
                  <img
                    src={transaction.img || "/noproduct.jpg"}
                    alt=""
                    className={styless.userImage}
                  />
                  {transaction.name}
                </div>
              </td>
              <td>{transaction.category}</td>
              <td>${transaction.price}</td>
              <td>
                <span
                  className={`${styless.status}
               ${transaction.result ? styless.done : styless.pending}`}
                >
                  {transaction.result ? "Success" : "	Pending"}
                </span>
              </td>
              <td>{transaction.client}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/transactions/${transaction.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default TransactionPage;
