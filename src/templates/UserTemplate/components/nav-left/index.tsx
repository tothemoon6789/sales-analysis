import * as React from "react";
import "./style.scss";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
export interface INavLeftProps {}

export function NavLeft(props: INavLeftProps) {
  return (
    <div className="wrap-nav-left">
      <div className="left">
        <div className="icon">
          <AddModeratorIcon />
        </div>
        <div className="info">
          <p>Thu Nhập</p>
          <p>123 tr</p>
        </div>
      </div>
      <div className="right">
        <span>+ 2.65%</span>
      </div>
    </div>
  );
}
