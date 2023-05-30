import logo from "./logo.svg";
import "./App.css";
import Home from "./View/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./View/About/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
