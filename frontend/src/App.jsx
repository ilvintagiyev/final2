import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayouts from "./layout/MainLayouts";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Admin from "./pages/Admin/Admin";
import Basket from "./pages/Basket/Basket";

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts/>}>
            <Route path="/Home" element={<Home/>} /> 
            <Route path="/Add" element={<Add/>} /> 
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Basket" element={<Basket/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
