"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const seachParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();
  const handleSearch = (e) => {
    const params = new URLSearchParams(seachParams)
    if (e.target.value) {
      params.set("q", e.target.value)
      
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} onChange={ handleSearch} className={styles.input} />
    </div>
  );
};

export default Search;
