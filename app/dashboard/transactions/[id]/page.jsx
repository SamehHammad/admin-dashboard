import { updateProduct, updateTransaction } from "@/app/lib/actions";
import {  fetchTransaction } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/productDetails/productDetails.module.css";


const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const transaction = await fetchTransaction(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <img src={transaction.img||"/noavatar.png"} alt="" fill className={styles.img} />
        </div>
        {transaction.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updateTransaction} className={styles.form}>
          <input type="hidden" name="id" value={transaction.name} />
          <label>name</label>
          <input type="text" name="name" value={transaction.name} />
          <label>Price</label>
          <input type="number" name="price" value={transaction.price} />
          <label>Client Name</label>
          <input
            type="text"
            name="client"
            value={transaction.client}
          />
        <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            value={transaction.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
