import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Link to={"/projects/1"}>Project 1</Link>
      <Link to={"/projects/2"}>Project 2</Link>
    </div>
  );
};
