import { Link } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} style={{ display: "flex" }}>
      <h1>hrApp - demo basics</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
