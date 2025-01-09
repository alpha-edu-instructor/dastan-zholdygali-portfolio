import { Link } from "react-router-dom";
import { ICategory } from "@utils/interfaces";
import { PORTFOLIO_PAGE_ROUTE } from "@utils/consts";

interface Props {
  category: ICategory;
}

const PortfolioSection: React.FC<Props> = ({ category }) => {
  return (
    <Link
      to={PORTFOLIO_PAGE_ROUTE + "/" + category.link}
      className="portfolio-section"
    >
      <div style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
      <h2
        className="portfolio-section__title"
        style={category.isWhite ? { color: "#fff" } : { color: "#000" }}
      >
        {category.title}
      </h2>
    </Link>
  );
};

export default PortfolioSection;
