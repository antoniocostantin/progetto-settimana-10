import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter.jsx";
import MyNav from "./component/MyNav.jsx";
import Home from "./component/Home.jsx";


function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main className="text-secondary">
        <Home  />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
