import React from "react";
import Home from "./templates/home";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h1>Doanh thu</h1>}/>
          <Route path="hop-dong" element={<h1>Hop dong</h1>}/>
          {/* <Route path="ho" element={<h1>I AM  not home</h1>}/> */}
          <Route path="luong" element={<h1>Luong</h1>}/>
          <Route path="bieu-do" element={<h1>bieu do</h1>}/>
          <Route path="khach-hang" element={<h1>Khahc hang</h1>}/>
          <Route path="*" element={<h1>404 ERROR</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
