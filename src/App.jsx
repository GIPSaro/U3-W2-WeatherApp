import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MeteoHome from "./components/MeteoHome";
import MainMeteoSearch from "./components/MainMeteoSearch";
import City from "./components/City";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <MeteoHome />
        <Routes>
          <Route path="/city" element={<City />} />
          <Route path="/" element={<MainMeteoSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
