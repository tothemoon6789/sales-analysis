import * as React from 'react';
import './style.scss'
import AddHomeIcon from '@mui/icons-material/AddHome';
export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div className="wrap-header">
      <div className="left">Dashboard</div>
      <div className="right">
        <AddHomeIcon/>
        <AddHomeIcon/>
        <AddHomeIcon/>
        <AddHomeIcon/>
        <AddHomeIcon/>
        <AddHomeIcon/>
      </div>
    </div>
  );
}
