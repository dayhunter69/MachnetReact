import SideNav from "./SideNav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from 'react'
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
function App() {
  return (<>
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/transaction" exact element={<Transactions/>}></Route>
          </Routes>
      </BrowserRouter>
    </>)
  
}


export default App;