import "./style.scss";
import LoginIcon from "@mui/icons-material/Login";
import ImageIcon from "@mui/icons-material/Image";
import SettingsIcon from '@mui/icons-material/Settings';
export default function Nav() {
  return (
    <>
      <div className="nav-top">
        <div className="left-nav">
          <ImageIcon className="icon"/>
        </div>
        <div className="right-nav">
            <SettingsIcon className="icon"/>
          <LoginIcon className="icon" />
        </div>
      </div>
    </>
  );
}
