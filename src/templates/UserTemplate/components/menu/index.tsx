import * as React from 'react';
import './style.scss'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
export interface IMenuProps {
}

export default function Menu (props: IMenuProps) {
  return (
    <div className="menu">
      <p>ABC</p>
      <hr />
      <ul>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
      </ul>
      <p>ABC</p>
      <hr />
      <ul>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
      </ul>
      <p>ABC</p>
      <hr />
      <ul>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
      </ul>
      <p>ABC</p>
      <hr />
      <ul>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
        <li><AccessTimeFilledIcon/>Nav Time</li>
      </ul>
      <p>Design by Linh Pham</p>
    </div>
   
  );
}
