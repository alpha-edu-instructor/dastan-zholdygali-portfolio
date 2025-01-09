import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const PortfolioSection: React.FC<Props> = ({ title }) => {
  return (
    <Link to="" className="portfolio-section">
      <h2 className="portfolio-section__title">{title}</h2>
    </Link>
  );
};

export default PortfolioSection;
