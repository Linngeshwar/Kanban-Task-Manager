import useTaskStore from "../stores/TaskStore";

const columns = [
  {
    key: "todo",
    label: "To-Do",
    color: "from-slate-700 to-slate-800",
    accent: "bg-blue-500",
    textColor: "text-blue-400",
    icon: "📝",
  },
  {
    key: "inprogress",
    label: "In Progress",
    color: "from-slate-700 to-slate-800",
    accent: "bg-amber-500",
    textColor: "text-amber-400",
    icon: "⚡",
  },
  {
    key: "done",
    label: "Done",
    color: "from-slate-700 to-slate-800",
    accent: "bg-emerald-500",
    textColor: "text-emerald-400",
    icon: "✅",
  },
];

export default function Kanban() {
  const { tasks } = useTaskStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Task Management
        </h1>
        <p className="text-gray-400 text-lg">
          Organize your workflow efficiently
        </p>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {columns.map((col) => (
          <div
            key={col.key}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl transition-all duration-300 hover:shadow-xl hover:border-slate-600/50"
          >
            {/* Column Header */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{col.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {col.label}
                  </h3>
                </div>
                <div
                  className={`${col.accent} text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg`}
                >
                  {tasks.filter((t) => t.status === col.key).length}
                </div>
              </div>
            </div>

            {/* Tasks Container */}
            <div className="p-4 min-h-[500px] max-h-[600px] overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {tasks
                  .filter((t) => t.status === col.key)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="group bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/30 p-4 cursor-grab hover:cursor-grabbing transition-all duration-200 hover:bg-slate-700/80 hover:border-slate-600/50 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-base mb-2 group-hover:text-gray-100">
                            {task.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${col.accent}`}
                            ></div>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">
                              {col.label}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg hover:bg-slate-600/50 transition-colors">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-red-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Empty State */}
                {tasks.filter((t) => t.status === col.key).length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">No tasks yet</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Drag tasks here or create new ones
                    </p>
                  </div>
                )}
              </div>

              {/* Add Task Button */}
              <button className="w-full mt-4 p-3 border-2 border-dashed border-slate-600 rounded-xl text-gray-400 hover:text-white hover:border-slate-500 transition-all duration-200 flex items-center justify-center gap-2 group">
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="font-medium">Add Task</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
