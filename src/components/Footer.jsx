import { Button, Typography } from "@mui/material";
import styles from "./Footer.module.css";
// import Counter from "./Counter";

export default function Footer({ count, setCount }) {
  return (
    <footer className={styles.footer}>
      <Typography variant="h3">
        Copyright © 2025 WP2025K. All rights reserved
      </Typography>
      <div>{count}</div>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </footer>
  );
}
