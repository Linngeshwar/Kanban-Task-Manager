import Kanban from "./components/Kanban";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/tasks" element={<Kanban />}></Route>
    </Routes>
  );
}

export default App;
