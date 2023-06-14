import { Home, Form, Landing, Detail } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
