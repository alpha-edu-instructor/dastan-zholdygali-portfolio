import { Link } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE
} from "@utils/consts";
import logo from "@img/logo.png";

const Header: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-part">
        <Link to={HOME_PAGE_ROUTE}>
          <img src={logo} alt="Logo" height={40} />
        </Link>
      </div>
      <div className="nav-part">
        <Link to={PORTFOLIO_PAGE_ROUTE} className="nav-link">
          Portfolio
        </Link>
        <Link to={ABOUT_PAGE_ROUTE} className="nav-link">
          About
        </Link>
        <Link to={CONTACT_PAGE_ROUTE} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
