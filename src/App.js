import NotFound from "./component/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter.jsx";
import Home from "./component/Home.jsx";
import CityDetails from "./component/CityDetails.jsx";
import { useEffect, useState } from "react";
const myFav = ["Erchie", "Brindisi", "Roma", 'Andria', 'Bari', 'Lecce'];

function App() {

 const [changep, setChangep] = useState(false) 

 const changed = () => { setChangep(true)}

 useEffect (()=> {
  setChangep(false)
 }, [])

 useEffect(()=>{}, [changep])

  return (
    <BrowserRouter>
      <header>
        <MyNavbar changed={changed}/>
      </header>
      <main className="text-secondary">
      <Routes>
          <Route path="/" element={<Home myFav={myFav}/>} />
          <Route path="/details/:city" element={<CityDetails change={changep}/>} /> 
          <Route path="*" element={<NotFound />} />
      </Routes>

      </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
