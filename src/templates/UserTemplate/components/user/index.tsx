import * as React from "react";
import "./style.scss";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import InfoIcon from '@mui/icons-material/Info';
export interface IUserProps {}

export function User(props: IUserProps) {
  return (
    <div className="user">
      <div className="background">
        <img
          src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/11/gioi-thieu-3-kham-pha-nui-ngoc-linh-kon-tum-vntrip.vn_.jpg"
          alt="nui-ngoc-linh"
        />
        <div className="icon">
          <LinearScaleIcon />
        </div>
      </div>
      <div className="avatar">
        <img
          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/34963121_2126044707679908_3959100978006851584_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=4q8ijbNQi-wAX-Of6yH&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfClp6vVRQcbL-0FMHBw8pnF3aIR2uO14ZqPx96NhgcLUg&oe=6481B8F4"
          alt="linh-pham"
        />
        <h3>Phạm Ngọc Linh</h3>
        <p>Web Developer</p>
      </div>
      <div className="quantity">
        <div className="left">
          <p>Product</p>
          <p>123k</p>
        </div>
        <div className="right">
          <p>Product</p>
          <p>123k</p>
        </div>
      </div>
      <hr />
      <div className="earing">
        <span>Thu Nhập</span>
        <InfoIcon/>
      </div>
    </div>
  );
}
