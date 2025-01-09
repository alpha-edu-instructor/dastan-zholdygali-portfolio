import { Link } from "react-router-dom";
import SocialMediaLink from "../shared/SocialMediaLink";
import { HOME_PAGE_ROUTE } from "@utils/consts";
import logo from "@img/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-part">
          <Link to={HOME_PAGE_ROUTE}>
            <img src={logo} alt="Logo" height={40} />
          </Link>
        </div>
        <div className="footer-part">
          <SocialMediaLink socialMedia="linkedin" hasBackground={false} />
          <SocialMediaLink socialMedia="twitter" hasBackground={false} />
        </div>
      </div>
      <div className="footer-bottom">&copy; 2025 Dastan Zholdygali</div>
    </footer>
  );
};

export default Footer;
