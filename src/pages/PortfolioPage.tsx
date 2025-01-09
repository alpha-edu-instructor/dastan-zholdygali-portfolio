import PortfolioSection from "@components/portfolio/PortfolioSection";

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio">
      <h1 className="page-title">My Works As</h1>
      <div className="portfolio-list">
        <PortfolioSection title="Graphic Designer" />
      </div>
    </div>
  );
};

export default PortfolioPage;
