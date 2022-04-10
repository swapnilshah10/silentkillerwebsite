import "./App.css";
import Greet from "./components/Greet";
// import count1 from "./components/count";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Greet name="Silentkiller"></Greet> */}
        <Routes>
        <Route path = "/"  element = {< Greet name="Silentkiller" />} ></Route> 
        <Route path = "/count" element = {<count1/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
