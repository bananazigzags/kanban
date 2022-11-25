import { Outlet, Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          Kanban
        </Link>
      </header>
      <Outlet />
    </>
  );
};
