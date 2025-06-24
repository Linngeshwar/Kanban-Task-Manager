import { create } from "zustand";
import { v4 } from "uuid";
import { persist, devtools } from "zustand/middleware";

const useTaskStore = create(
  persist(
    devtools(
      (set) => ({
        tasks: [],
        addTask: (title, description, status = "todo") =>
          set((state) => ({
            tasks: [...state.tasks, { id: v4(), title, description, status }],
          })),
        removeTask: (taskID) =>
          set((state) => ({
            tasks: state.tasks.filter(
              (task) => String(task.id) !== String(taskID)
            ),
          })),
        moveTask: (taskID, status) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              String(task.id) === String(taskID) ? { ...task, status } : task
            ),
          })),
        editTask: (taskID, fields) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              String(task.id) === String(taskID) ? { ...task, ...fields } : task
            ),
          })),
      }),
      {
        name: "task-storage",
      }
    )
  )
);

export default useTaskStore;
