import Header from "./components/header";
import MainMiddle from "./components/main/main-middle";
import MainTop from "./components/main/main-top";
import Right from "./components/right";
import "./style.scss";
export default function Home() {
  return (
    <>
      <div className="mobile-container">
        <div className="header">
          <Header />
        </div>
        <div className="nav">nav</div>
        <div className="menu">menu</div>
        {/* <div className="main"></div> */}
        <div className="main-top">
          <MainTop />
        </div>
        <div className="main-middle">
          <MainMiddle />
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
