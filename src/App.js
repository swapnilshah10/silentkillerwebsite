import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
// import Search from "./components/Search";
import Header from "./components/Header";
import Videogrid from "./components/Videogrid";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import {useLocation} from "react-router-dom";

function App() {
  // const search = useLocation().search;
  // const que = "/" + new URLSearchParams(search).get('q');
  return (
    <div>
      <Router>
          <Navbar/>          
          <Header/>
          <Sidebar/>
        <LoadingBar height={3} color='#f11946'/>
      <Routes>        
      <Route exact path="/" element={<Videogrid key = "all" playlist_id = "UUzcKPLI9b0z-cUjCw6GFifA" max = "200"/>}> </Route>
      <Route path="/shorts" element={<Videogrid key ="normal" playlist_id = "PLc6bUwTVKwCPOYLwfpKp5uBxaK9dSl5Qx" max="100"/>}> </Route>
      <Route exact path="/tdm" element={<Videogrid key = " tdm" playlist_id = "PLc6bUwTVKwCM07hH4vbznPPr2K68Ji_YR" max = "8"/>}> </Route>
      <Route exact path="/drills" element={<Videogrid key = "drills" playlist_id = "PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75" max = "30"/>}> </Route>
      {/* <Route exact path={que} element={<Search key = " tdm" playlist_id = "PLc6bUwTVKwCM07hH4vbznPPr2K68Ji_YR" max = "5"/>}> </Route> */}
      </Routes>
    </Router>
      </div>
  )
}
export default App;
