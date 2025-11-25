import styles from "./Footer.module.css";
// import Counter from "./Counter";

export default function Footer({ count, setCount }) {
  return (
    <footer className={styles.footer}>
      <h3>Copyright © 2025 WP2025K. All rights reserved.</h3>
      {/* <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </footer>
  );
}
