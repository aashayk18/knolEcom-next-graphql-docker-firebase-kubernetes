import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../../contexts/ThemeContext";

export default function ProductCard(props) {
  const maxDescLength = 50;
  const { theme } = useTheme();
  return (
    <div className={`${styles.productCard}`}>
      <div className={`${styles.productWhole}`}>
        <div className={`${styles.productDetails}`}>
          <Link href={`/products/${props.id}`}>
            <img
              src={props.img}
              alt={props.key}
              className={styles.productImg}
              loading="lazy"
            />
          </Link>
          <div className={`${styles.namePrice}`}>
            <h2
              className={`${styles.productName}`}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              {props.name}
            </h2>
            <p className={`${styles.productPrice}`}>${props.price}</p>
            <p className={`${styles.productRating}`}>{props.rating}⭐</p>
          </div>
        </div>
        <p
          className={`${styles.productDescription}`}
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {props.desc.length > maxDescLength
            ? props.desc.slice(0, maxDescLength) + "..."
            : props.desc}
        </p>
      </div>
    </div>
  );
}
