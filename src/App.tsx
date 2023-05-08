import React from "react";
import Home from "./templates/HomeTemplate";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Revenue from "./templates/HomeTemplate/pages/revenue";
import Chart from "./templates/HomeTemplate/pages/chart";
import Contract from "./templates/HomeTemplate/pages/contract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Revenue/>}/>
          <Route path="hop-dong" element={<Contract/>}/>
          {/* <Route path="ho" element={<h1>I AM  not home</h1>}/> */}
          <Route path="luong" element={<h1>Luong</h1>}/>
          <Route path="bieu-do" element={<Chart/>}/>
          <Route path="khach-hang" element={<h1>Khahc hang</h1>}/>
          <Route path="*" element={<h1>404 ERROR</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
