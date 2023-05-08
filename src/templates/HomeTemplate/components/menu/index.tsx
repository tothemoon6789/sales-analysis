import { NavLink } from "react-router-dom";
import "./style.scss";
export default function Menu() {
  return (
    <>
      <ul className="menu">
        <li>

        <NavLink to={""}>
          Doanh thu
        </NavLink>
        </li>
        <li>

        <NavLink to={"/hop-dong"}>
          
            <span className="contract">92</span>Hợp đồng
          
        </NavLink>
        </li>
        <li>

        <NavLink to={"/luong"}>
          
            Lương
          
        </NavLink>
        </li>
        <li>

        <NavLink to={"/bieu-do"}>
          
          Biểu đồ
          
        </NavLink>
        </li>
        <li>

        <NavLink to={"/khach-hang"}>
          
            Khách hàng
          
        </NavLink>
        
        </li>
      </ul>
    </>
  );
}
