import dayjs, { Dayjs } from "dayjs";
import { Draggable } from "react-beautiful-dnd";
import { PriorityChip, Priority } from "../PriorityChip/PriorityChip";
import styles from "./Task.module.scss";

type TaskType = {
  id: string;
  title: string;
  description?: string;
  dateCreated: Dayjs;
  priority: Priority;
};

type TaskProps = {
  item: TaskType;
  index: number;
};

export const Task = ({ item, index }: TaskProps) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <div className={styles.taskContent}>
              <div className={styles.timeInfo}>
                <div>
                  {`started: ${dayjs(item.dateCreated).format("D MMM YYYY")}`}
                </div>
                <div>{`elapsed: ${dayjs().diff(
                  dayjs(item.dateCreated),
                  "day"
                )} days`}</div>
              </div>
              <div>{item.title}</div>
              {item.description && (
                <div className={styles.desc}>{item.description}</div>
              )}
              <div className={styles.priorityWrapper}>
                <PriorityChip priority={item.priority} />
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
