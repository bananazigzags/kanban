import dayjs, { Dayjs } from "dayjs";
import { Draggable } from "react-beautiful-dnd";
import { PriorityChip, Priority } from "../PriorityChip/PriorityChip";
import styles from "./Task.module.scss";
import { ReactComponent as AttachIcon } from "../../assets/icons/push-pin.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

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
    <div className={styles.task}>
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
                <div className={styles.row}>
                  <div className={styles.timeInfo}>
                    <div>
                      {`started: ${dayjs(item.dateCreated).format(
                        "D MMM YYYY"
                      )}`}
                    </div>
                    <div>{`elapsed: ${dayjs().diff(
                      dayjs(item.dateCreated),
                      "day"
                    )} days`}</div>
                  </div>
                  <EditIcon
                    className={styles.editIcon}
                    onClick={() => alert("coming soon!")}
                  />
                </div>
                <div>{item.title}</div>
                {item.description && (
                  <div className={styles.desc}>{item.description}</div>
                )}
                <div className={styles.row}>
                  <label htmlFor="filePicker">
                    <AttachIcon className={styles.attachIcon} />
                  </label>
                  <input
                    type="file"
                    id="filePicker"
                    name="filePicker"
                    accept="image/png, image/jpeg, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .txt, .pdf"
                    className={styles.filePicker}
                  />
                  <div className={styles.priorityWrapper}>
                    <PriorityChip priority={item.priority} />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};
