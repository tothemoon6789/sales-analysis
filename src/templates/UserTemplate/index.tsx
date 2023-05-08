import { BottomLeft } from './components/bottom-left'
import { BottomRight } from './components/bottom-right'
import { Header } from './components/header'
import { Main } from './components/main'
import Menu from './components/menu'
import { MiddleCenter } from './components/middle-center'
import { MiddleLeft } from './components/middle-left'
import { MiddleRight } from './components/middle-right'
import { NavCenter } from './components/nav-center'
import { NavLeft } from './components/nav-left'
import { NavRight } from './components/nav-right'
import { User } from './components/user'
import './style.scss'
export default function UserTemplate (){
    return (<>
        <div className="user-template">
            <div className="header"><Header/></div>
            <div className="menu"><Menu/></div>
            <div className="nav-left"><NavLeft/></div>
            <div className="nav-center"><NavLeft/></div>
            <div className="nav-right"><NavLeft/></div>
            {/* <div className="nav-center"><NavCenter/></div>
            <div className="nav-right"><NavRight/></div> */}
            <div className="user"><User/></div>
            <div className="main"><Main/></div>
            <div className="middle-left"><MiddleLeft/></div>
            <div className="middle-center"><MiddleCenter/></div>
            <div className="middle-right"><MiddleRight/></div>
            <div className="bottom-left"><BottomLeft/></div>
            <div className="bottom-right"><BottomRight/></div>
        </div>
    </>)
}