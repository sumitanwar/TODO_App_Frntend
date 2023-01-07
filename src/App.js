import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/Signin/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Registration/register";
import Header from "./components/Item/Header";
import Items from "./components/Item/item";
import Item from "./components/Item/item";
import Sidebar from "./components/Item/sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
