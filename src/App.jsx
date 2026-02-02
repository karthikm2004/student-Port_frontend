import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentForm from "./pages/StudentForm";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/edit-student/:id" element={<StudentForm />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
