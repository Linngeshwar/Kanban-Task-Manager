import { create } from "zustand";
import { v4 } from "uuid";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: "Design UI", status: "todo" },
    { id: 2, title: "Setup Backend", status: "inprogress" },
    { id: 3, title: "Deploy App", status: "done" },
    { id: 4, title: "Write Documentation", status: "todo" },
    { id: 5, title: "Create Wireframes", status: "todo" },
    { id: 6, title: "Fix Bugs", status: "inprogress" },
    { id: 7, title: "Test Features", status: "done" },
    { id: 8, title: "Optimize Code", status: "inprogress" },
    { id: 9, title: "Setup CI/CD", status: "todo" },
    { id: 10, title: "Review PRs", status: "inprogress" },
    { id: 11, title: "Update Dependencies", status: "done" },
    { id: 12, title: "Refactor Components", status: "todo" },
    { id: 13, title: "Implement Auth", status: "inprogress" },
    { id: 14, title: "Configure Linter", status: "done" },
    { id: 15, title: "Setup Database", status: "todo" },
    { id: 16, title: "Write Unit Tests", status: "inprogress" },
    { id: 17, title: "Design Logo", status: "done" },
    { id: 18, title: "Plan Sprint", status: "todo" },
    { id: 19, title: "Deploy to Staging", status: "inprogress" },
    { id: 20, title: "Gather Feedback", status: "done" },
    { id: 21, title: "Update Roadmap", status: "todo" },
    { id: 22, title: "Setup Analytics", status: "inprogress" },
  ],
  addTask: (title, description, status = "to-do") =>
    set((state) => ({
      tasks: [...state.tasks, { id: v4(), title, description, status }],
    })),
  removeTask: (taskID) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskID),
    })),
  moveTask: (taskID, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskID ? { ...task, status } : task
      ),
    })),
  editTask: (taskID, fields) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskID ? { ...task, ...fields } : task
      ),
    })),
}));

export default useTaskStore;
