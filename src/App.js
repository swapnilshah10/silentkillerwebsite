import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Videogrid from "./components/Videogrid";
import Footer from "./components/footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div>
        <Navbar/>
        <Header/>
        <Sidebar/>
        <Videogrid/>
        <Footer/>
      </div>
  )
}
export default App;
