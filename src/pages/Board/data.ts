import dayjs, { Dayjs } from "dayjs";
import { v4 as uuid } from "uuid";
import { Priority } from "../../components/PriorityChip/PriorityChip";

export type TaskType = {
  id: string;
  title: string;
  description?: string;
  dateCreated: Dayjs;
  priority: Priority;
};

export type Column = {
  name: string;
  items: TaskType[];
};

export interface Columns {
  [key: string]: Column;
}

export const initialTasks: TaskType[] = [
  {
    id: uuid(),
    title: "Ad designs",
    description: "Create designs for advertising",
    dateCreated: dayjs("2022-11-25", "YYYY-MM-DD"),
    priority: "low",
  },
  {
    id: uuid(),
    title: "Arrange rep meeting",
    description: "Autumn meeting to discuss winter campaign",
    dateCreated: dayjs("2022-11-23", "YYYY-MM-DD"),
    priority: "medium",
  },
  {
    id: uuid(),
    title: "Client contacts update",
    description: "Update CRM contact details",
    dateCreated: dayjs("2022-11-25", "YYYY-MM-DD"),
    priority: "high",
  },
  {
    id: uuid(),
    title: "Teambuilding",
    description: "Clean up snow around the office building",
    dateCreated: dayjs("2022-11-20", "YYYY-MM-DD"),
    priority: "medium",
  },
  {
    id: uuid(),
    title: "Finalize project proposal",
    description: "Collect signatures and update wiki",
    dateCreated: dayjs("2022-10-25", "YYYY-MM-DD"),
    priority: "low",
  },
  {
    id: uuid(),
    title: "Choose advertising locations",
    dateCreated: dayjs("2022-11-21", "YYYY-MM-DD"),
    priority: "low",
  },
];

export const initialColumns = {
  "1": {
    name: "Queue",
    items: initialTasks,
  },
  "2": {
    name: "Development",
    items: [],
  },
  "3": {
    name: "Done",
    items: [],
  },
};
