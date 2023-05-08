import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Revenue from "./pages/revenue";
import Menu from "./components/menu";
import Nav from "./components/nav";
import Right from "./components/right";
import "./style.scss";
export default function Home() {
  return (
    <>
      <div className="mobile-container">
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Nav/>
        </div>
        <div className="menu">
          <Menu/>
        </div>
        {/* <div className="main"></div> */}
        <div className="main-top">
          <Outlet/>
          {/* <MainTop /> */}
        </div>
        <div className="main-middle-left">middle left</div>
        <div className="main-middle-right">middle right</div>
        <div className="main-bottom-left">bottom left</div>
        <div className="main-bottom-right">bottom right</div>
        <div className="right">
          <Right />
        </div>
        <div className="footer">footer</div>
      </div>
    </>
  );
}
