import AddMovie from "./components/AddMovie";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Login from './components/Login';
import Signup from './components/Signup';


const Appstate=createContext();

function App() {
  const[login,setLogin]=useState(false);
  const[userName,setUserName]=useState("");
  return (
    <Appstate.Provider value={{login,setLogin,userName,setUserName}}>
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/AddMovie" element={<AddMovie/>} />
        <Route path="/Detail/:id" element={<Detail/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
    
    </Appstate.Provider>
  );
}

export {Appstate}
export default App;
