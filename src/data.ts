export type TaskType = {
  id: number;
  title: string;
  description?: string;
};

export type ColumnType = {
  title: string;
  tasks: TaskType[];
};

export const columns: ColumnType[] = [
  {
    title: "Queue",
    tasks: [
      {
        id: 1,
        title: "Create designs",
        description: "Create designs for advertising",
      },
      {
        id: 2,
        title: "Arrange sales rep meetings",
        description: "Autumn meeting to discuss winter campaign",
      },
      {
        id: 3,
        title: "Update client contacts",
        description: "Update CRM contact details",
      },
    ],
  },
  {
    title: "Development",
    tasks: [
      {
        id: 4,
        title: "Arrange therapy",
        description: "Set up therapy appointments for frontend devs",
      },
      {
        id: 5,
        title: "Teambuilding",
        description: "Clean up snow around the office building",
      },
      { id: 6, title: "Some other task", description: "Another description" },
    ],
  },
  {
    title: "Done",
    tasks: [
      {
        id: 7,
        title: "Finalize project proposal",
        description: "Collect signatures and update wiki",
      },
      { id: 8, title: "Choose advertising locations" },
    ],
  },
];
