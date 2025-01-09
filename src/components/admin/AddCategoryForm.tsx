import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { uploadImage } from "@firebaseConfig/storage";
import { ADMIN_PROJECT_PAGE_ROUTE, CATEGORIES_COLLECTION } from "@utils/consts";
import { addNewCategory } from "@firebaseConfig/firestore";
import Input from "@components/shared/Input";
import Submit from "@components/shared/Submit";
import Loader from "@components/shared/Loader";

const AddCategoryForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [isWhite, setIsWhite] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCheckboxIsWhite = () => {
    setIsWhite(!isWhite);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmitAddCategory = async (e: FormEvent) => {
    e.preventDefault();
    if (title && file) {
      try {
        setIsLoading(true);
        const imageUrl: string = await uploadImage(CATEGORIES_COLLECTION, file);
        const link: string = await addNewCategory(title, imageUrl, isWhite);
        navigate(ADMIN_PROJECT_PAGE_ROUTE.replace(":id", link));
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form className="acf-form" onSubmit={handleSubmitAddCategory}>
      <h2 className="acf-title">Add category</h2>
      <Input title="Title" name="title" value={title} setValue={setTitle} />
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        id="image"
        style={{ display: "none" }}
      />
      <label htmlFor="image" className="acf-upload">
        <LuUpload />
        Upload
      </label>
      <div className="acf-checkbox">
        <p className="input-label">Label is white?</p>
        <input
          type="checkbox"
          checked={isWhite}
          onChange={handleCheckboxIsWhite}
        />
      </div>
      <div>
        <Submit title="Submit" />
        {isLoading && <Loader isFullPage={true} />}
      </div>
    </form>
  );
};

export default AddCategoryForm;
