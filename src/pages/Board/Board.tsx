import styles from "./Board.module.scss";
import { useParams } from "react-router-dom";

export const Board = () => {
  const { boardId } = useParams();

  return <div className={styles.board}>Board {boardId}</div>;
};
