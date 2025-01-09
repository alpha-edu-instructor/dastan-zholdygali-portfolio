import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { deleteImage, uploadImage } from "@firebaseConfig/storage";
import { ADMIN_PROJECT_PAGE_ROUTE, CATEGORIES_COLLECTION } from "@utils/consts";
import { updateData } from "@firebaseConfig/firestore";
import Input from "@components/shared/Input";
import Submit from "@components/shared/Submit";
import Loader from "@components/shared/Loader";
import { ICategory } from "@utils/interfaces";

interface Props {
  category: ICategory;
}

const EditCategoryForm: React.FC<Props> = ({ category }) => {
  const [title, setTitle] = useState<string>(category.title);
  const [isWhite, setIsWhite] = useState<boolean>(category.isWhite);
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

  const handleSubmitEditCategory = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data: ICategory = category;
      if (file) {
        await deleteImage(category.imageUrl);
        const imageUrl: string = await uploadImage(CATEGORIES_COLLECTION, file);
        data.imageUrl = imageUrl;
      }
      data.isWhite = isWhite;
      data.title = title;
      await updateData(CATEGORIES_COLLECTION, category.id, data);
      navigate(0);
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="acf-form" onSubmit={handleSubmitEditCategory}>
      <Input title="Title" name="title" value={title} setValue={setTitle} />
      <div className="acf-image">
        <img src={category.imageUrl} alt={category.title} />
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          id={`image-${category.id}`}
          style={{ display: "none" }}
        />
        <label
          htmlFor={`image-${category.id}`}
          className={`acf-image-btn ${
            category.isWhite && "acf-image-btn__white"
          }`}
        >
          <LuUpload />
        </label>
      </div>

      <div className="acf-checkbox">
        <p className="input-label">Label is white?</p>
        <input
          type="checkbox"
          checked={isWhite}
          onChange={handleCheckboxIsWhite}
        />
      </div>
      <div className="acf-btns">
        <Submit title="Edit" />
        <Link
          className="submit-btn"
          to={ADMIN_PROJECT_PAGE_ROUTE.replace(":id", category.link)}
        >
          Open
        </Link>
        {isLoading && <Loader isFullPage={true} />}
      </div>
    </form>
  );
};

export default EditCategoryForm;
