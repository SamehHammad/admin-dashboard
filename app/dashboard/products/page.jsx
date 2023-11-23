import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const products = await fetchProducts(q);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Color</td>
            <td>Stock</td>
            <td>weight</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td key={product.id}> 
                <div className={styles.product}>
                  <img
                    src={product.img||"/noproduct"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc?"Yes":"No" }</td>
              <td>{product.price } $</td>
              <td>{product.color }</td>
              <td>{product.stock }</td>
              <td>{ product.weight} g</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/products/test">
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
      <Pagination />
    </div>
  );
};

export default ProductsPage;
