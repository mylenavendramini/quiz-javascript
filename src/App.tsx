import "./App.css";
import Question from "./components/question/question";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Question />} />
      </Routes>
      <p>
        Made by{" "}
        <a href="https://mylenavendramini.com" target="_blank" rel="noreferrer">
          Mylena Vendramini
        </a>
      </p>
    </div>
  );
}

export default App;
