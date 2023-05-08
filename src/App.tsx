import React from "react";
// import Home from "./templates/HomeTemplate";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Revenue from "./templates/HomeTemplate/pages/revenue";
// import Chart from "./templates/HomeTemplate/pages/chart";
// import Contract from "./templates/HomeTemplate/pages/contract";
import UserTemplate from "./templates/UserTemplate";

function App() {
  return (
    <UserTemplate/>
    // <BrowserRouter>
     
    //   <Routes>
    //     <Route path="/" element={<UserTemplate/>}>
    //         <Route
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
 {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Revenue/>}/>
          <Route path="hop-dong" element={<Contract/>}/>
          <Route path="luong" element={<h1>Luong</h1>}/>
          <Route path="bieu-do" element={<Chart/>}/>
          <Route path="khach-hang" element={<h1>Khahc hang</h1>}/>
          <Route path="*" element={<h1>404 ERROR</h1>}/>
        </Route>
      </Routes> */}
