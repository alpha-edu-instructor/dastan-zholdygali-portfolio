import { useEffect, useState } from "react";
import { getAllCategories } from "@firebaseConfig/firestore";
import PortfolioSection from "@components/portfolio/PortfolioSection";
import { ICategory } from "@utils/interfaces";
import Loader from "@components/shared/Loader";

const PortfolioPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const data: ICategory[] = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="portfolio">
      <h1 className="page-title">My Works As</h1>
      {isLoading ? (
        <div className="portfolio-loader">
          <Loader />
        </div>
      ) : (
        <div className="portfolio-list">
          {categories.map((item) => (
            <PortfolioSection category={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
