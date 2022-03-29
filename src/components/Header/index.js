import { Link } from "react-router-dom";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavigationItems from "../../config";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="james-consulting">
        JAMES CONSULTING
      </Link>
      <div className="menu d-f">
        {NavigationItems.map((item) => (
          <Link key={item.path} className="menu-text" to={item.path}>
            {item.label}
          </Link>
        ))}
        <div className="d-f">
          <AccountCircleIcon />
          <Link className="menu-text">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
