import styles from "../styles/SearchBox.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function SerachBox() {
  return (
    <div>
      {/* URL : /search?tags=apple&type=mobile&mode=and */}
      <Link href="/search?tags=apple&type=mobile&mode=and">
        <a className={styles.link}>
          <AiOutlineSearch />
        </a>
      </Link>
    </div>
  );
}
