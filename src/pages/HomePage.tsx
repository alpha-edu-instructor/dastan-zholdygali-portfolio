import { Link } from "react-router-dom";
import { PORTFOLIO_PAGE_ROUTE } from "@utils/consts";
import logo from "@img/logo-main.png";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <img src={logo} alt="Home bg" className="home-logo" />
      <Link to={PORTFOLIO_PAGE_ROUTE} className="home-btn">
        Enter
      </Link>
    </div>
  );
};

export default HomePage;
