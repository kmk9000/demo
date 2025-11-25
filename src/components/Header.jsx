import { Link, useLocation } from "react-router";
// import styles from "./Header.module.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  // return (
  //   <header className={styles.header} style={{ display: "flex" }}>
  //     <h1>hrApp - demo basics</h1>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/todos">Todos</Link>
  //     </nav>
  //   </header>
  // );

  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            color="inherit"
            variant={location.pathname === "/" ? "contained" : "text"}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            variant={location.pathname === "/about" ? "contained" : "text"}
            component={Link}
            to="/about"
          >
            About
          </Button>
          <Button
            color="inherit"
            variant={location.pathname === "/todos" ? "contained" : "text"}
            component={Link}
            to="/todos"
          >
            Todos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
