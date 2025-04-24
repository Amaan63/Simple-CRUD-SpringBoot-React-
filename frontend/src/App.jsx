import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./component/addStudent";
import ViewStudent from "./component/viewStudents";

function App() {
  return (
    <Routes>
      <Route path="add-student" element={<AddStudent />} />
      <Route path="view-students" element={<ViewStudent />} />
    </Routes>
  );
}

export default App;
