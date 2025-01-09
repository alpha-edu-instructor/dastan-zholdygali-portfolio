import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { firestore } from "./config";
import { CATEGORIES_COLLECTION } from "@utils/consts";
import { ICategory } from "@utils/interfaces";

export async function addNewCategory(
  title: string,
  imageUrl: string,
  isWhite: boolean = false
): Promise<string> {
  try {
    const collectionRef = collection(firestore, CATEGORIES_COLLECTION);
    const link: string = title.toLowerCase().split(" ").join("-");
    await addDoc(collectionRef, {
      title,
      link,
      isWhite,
      imageUrl
    });
    return link;
  } catch (error) {
    console.log(error);
    return "";
  }
}

export async function getAllCategories() {
  const collectionRef = collection(firestore, CATEGORIES_COLLECTION);
  const querySnapshot = await getDocs(collectionRef);
  const categories: ICategory[] = [];

  querySnapshot.forEach((doc) => {
    const item = doc.data() as ICategory;
    item.id = doc.id;
    categories.push(item);
  });

  return categories;
}

export const updateData = async (collection: string, id: string, data: any) => {
  const docRef = doc(firestore, collection, id);
  await updateDoc(docRef, data);
}