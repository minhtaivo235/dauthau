import "./App.scss";
import Master from "./views/master";
import { Routes, Route } from "react-router-dom";
import NopHoSo from "./views/nophoso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Master />}></Route>
      <Route path="/nophoso" element={<NopHoSo />}></Route>
    </Routes>
  );
}

export default App;
