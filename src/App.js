import "./App.scss";
import Master from "./views/master";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Master />}></Route>
      <Route path="/thong-tin-ca-nhan"></Route>
    </Routes>
  );
}

export default App;
