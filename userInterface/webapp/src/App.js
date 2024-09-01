
import {Button} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";
import Login from "./Pages/Login/Login";
import { Routes,Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import './index.css';
import CreateTodo from "./Pages/Todo/CreateTodo/CreateTodo";
import ListTodo from "./Pages/Todo/ListTodo/ListTodo";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}>
        <Route path="create" element={<CreateTodo/>}/>
        <Route path="list" element={<ListTodo/>}/>
      </Route>
    </Routes>   
    </>
  );
}

export default App;
