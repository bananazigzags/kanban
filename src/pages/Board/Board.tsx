import { useState } from "react";
import styles from "./Board.module.scss";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Task } from "../../components";
import { initialColumns, Columns } from "./data";

const onDragEnd = (
  result: DropResult,
  columns: Columns,
  setColumns: React.Dispatch<React.SetStateAction<Columns>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export const Board = () => {
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const { boardId } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.boardName}>
        <h1>Board {boardId}</h1>
      </div>
      <div className={styles.board}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div className={styles.column}>
                <h2 className={styles.colName}>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 350,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return <Task item={item} index={index} />;
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};
