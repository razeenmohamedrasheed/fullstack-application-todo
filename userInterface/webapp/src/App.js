
import {Button} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";
import Login from "./Pages/Login/Login";
import { Routes,Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import './index.css';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>   
    </>
  );
}

export default App;
