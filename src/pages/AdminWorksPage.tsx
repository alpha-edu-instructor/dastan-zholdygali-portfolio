import { useEffect, useState } from "react";
import AddCategoryForm from "@components/admin/AddCategoryForm";
import { ICategory } from "@utils/interfaces";
import { getAllCategories } from "@firebaseConfig/firestore";
import Loader from "@components/shared/Loader";
import EditCategoryForm from "@components/admin/EditCategoryForm";

const AdminWorksPage: React.FC = () => {
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
    <div className="admin-works">
      {isLoading && <Loader isFullPage={true} />}
      <h1 className="page-title">Works</h1>
      <div className="admin-works__grid">
        {categories.map((item) => (
          <EditCategoryForm
          category={item}
          key={item.id}
          />
        ))}
        <AddCategoryForm />
      </div>
    </div>
  );
};

export default AdminWorksPage;
