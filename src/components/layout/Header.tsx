import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiListBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE
} from "@utils/consts";
import logo from "@img/logo.png";

const Header: React.FC = () => {
  const isMobile: boolean = window.innerWidth < 768;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <div className="nav-part">
        <Link to={HOME_PAGE_ROUTE}>
          <img src={logo} alt="Logo" height={isMobile ? 32 : 40} />
        </Link>
      </div>
      <div className="nav-part">
        {isMobile ? (
          <>
            {isOpen ? (
              <IoClose size={40} onClick={toggleMobileMenu} />
            ) : (
              <PiListBold size={40} onClick={toggleMobileMenu} />
            )}
            {isOpen && (
              <div className="nav-mobile">
                <Link to={PORTFOLIO_PAGE_ROUTE} className="nav-mobile__link">
                  Portfolio
                </Link>
                <Link to={ABOUT_PAGE_ROUTE} className="nav-mobile__link">
                  About
                </Link>
                <Link to={CONTACT_PAGE_ROUTE} className="nav-mobile__link">
                  Contact
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to={PORTFOLIO_PAGE_ROUTE} className="nav-link">
              Portfolio
            </Link>
            <Link to={ABOUT_PAGE_ROUTE} className="nav-link">
              About
            </Link>
            <Link to={CONTACT_PAGE_ROUTE} className="nav-link">
              Contact
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
