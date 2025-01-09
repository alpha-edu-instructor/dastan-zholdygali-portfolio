import { CONTACT_PAGE_ROUTE } from "@utils/consts";
import { Link } from "react-router-dom";

const LinkToContact: React.FC = () => {
  return (
    <div className="ltc">
      <div className="ltc-container">
        <p className="ltc-text">
          Contact me here if you need help on your production
        </p>
        <Link to={CONTACT_PAGE_ROUTE} className="ltc-btn">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default LinkToContact;
