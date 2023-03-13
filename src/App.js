import Todo from "./components/Todo";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
