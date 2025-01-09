import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { useLocation } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE
} from "@utils/consts";
import LinkToContact from "@components/shared/LinkToContact";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  if (pathname === HOME_PAGE_ROUTE) {
    return children;
  }

  return (
    <>
      <Header />
      <div className="container">{children}</div>
      {(pathname === ABOUT_PAGE_ROUTE || pathname === PORTFOLIO_PAGE_ROUTE) && (
        <LinkToContact />
      )}
      <Footer />
    </>
  );
};

export default Layout;
