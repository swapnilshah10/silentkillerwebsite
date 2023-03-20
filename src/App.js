import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Videogrid from "./components/Videogrid";
import Bitly from "./components/Bitly"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import About from "./pages/About";

function App() {
  return (
    <div>
      <Router>
          <Navbar/>          
          <Header/>
        <LoadingBar height={3} color='#f11946'/>
      <Routes>        
      <Route exact path="/" element={<Videogrid key = "all" playlist_id = "UUzcKPLI9b0z-cUjCw6GFifA" max = "200"/>}> </Route>
      <Route path="/shorts" element={<Videogrid key ="normal" playlist_id = "PLc6bUwTVKwCPOYLwfpKp5uBxaK9dSl5Qx" max="100"/>}> </Route>
      <Route exact path="/tdm" element={<Videogrid key = " tdm" playlist_id = "PLc6bUwTVKwCM07hH4vbznPPr2K68Ji_YR" max = "8"/>}> </Route>
      <Route exact path="/drills" element={<Videogrid key = "drills" playlist_id = "PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75" max = "30"/>}> </Route>
      <Route exact path="/about" element = {<About/>}> </Route>
      <Route path = "/:url" element = {<Bitly/>}></Route>
      </Routes>
    </Router>
  <Footer/>
      </div>
  )
}
export default App;
