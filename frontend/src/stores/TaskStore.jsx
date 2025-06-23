import { create } from "zustand";
import { v4 } from "uuid";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: "Design UI", description: "Create user interface mockups and layouts", status: "todo" },
    { id: 2, title: "Setup Backend", description: "Initialize backend server and APIs", status: "inprogress" },
    { id: 3, title: "Deploy App", description: "Deploy the application to production", status: "done" },
    { id: 4, title: "Write Documentation", description: "Document features and usage", status: "todo" },
    { id: 5, title: "Create Wireframes", description: "Design wireframes for main screens", status: "todo" },
    { id: 6, title: "Fix Bugs", description: "Resolve reported bugs and issues", status: "inprogress" },
    { id: 7, title: "Test Features", description: "Test new and existing features", status: "done" },
    { id: 8, title: "Optimize Code", description: "Improve code performance and readability", status: "inprogress" },
    { id: 9, title: "Setup CI/CD", description: "Configure continuous integration and deployment", status: "todo" },
    { id: 10, title: "Review PRs", description: "Review and merge pull requests", status: "inprogress" },
    { id: 11, title: "Update Dependencies", description: "Update project dependencies to latest versions", status: "done" },
    { id: 12, title: "Refactor Components", description: "Refactor React components for reusability", status: "todo" },
    { id: 13, title: "Implement Auth", description: "Add authentication and authorization", status: "inprogress" },
    { id: 14, title: "Configure Linter", description: "Set up code linting tools", status: "done" },
    { id: 15, title: "Setup Database", description: "Initialize and configure the database", status: "todo" },
    { id: 16, title: "Write Unit Tests", description: "Write unit tests for core modules", status: "inprogress" },
    { id: 17, title: "Design Logo", description: "Create a logo for the project", status: "done" },
    { id: 18, title: "Plan Sprint", description: "Organize tasks for the next sprint", status: "todo" },
    { id: 19, title: "Deploy to Staging", description: "Deploy the app to the staging environment", status: "inprogress" },
    { id: 20, title: "Gather Feedback", description: "Collect feedback from users and stakeholders", status: "done" },
    { id: 21, title: "Update Roadmap", description: "Revise the project roadmap and milestones", status: "todo" },
    { id: 22, title: "Setup Analytics", description: "Integrate analytics tools for tracking", status: "inprogress" },
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
