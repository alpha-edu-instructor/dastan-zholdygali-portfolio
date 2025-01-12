import { Link } from "react-router-dom";
import SocialMediaLink from "../shared/SocialMediaLink";
import { HOME_PAGE_ROUTE } from "@utils/consts";
import logo from "@img/logo.png";
import logoCenter from "@img/logo-main.png";

const Footer: React.FC = () => {
  const isMobile: boolean = window.innerWidth < 768;
  const logIsCenter: boolean = window.innerWidth < 364;

  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-part">
          <Link to={HOME_PAGE_ROUTE}>
            <img
              src={logIsCenter ? logoCenter : logo}
              alt="Logo"
              height={isMobile ? 32 : 40}
            />
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
