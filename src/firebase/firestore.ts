import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  where,
  query
} from "firebase/firestore";
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

export async function updateData(collection: string, id: string, data: any) {
  const docRef = doc(firestore, collection, id);
  await updateDoc(docRef, data);
}

export async function fetchProjectsByCategoryLink(link: string) {
  try {
    const categoryQuery = query(
      collection(firestore, "Categories"),
      where("link", "==", link)
    );

    const categorySnapshot = await getDocs(categoryQuery);

    if (categorySnapshot.empty) {
      console.error("No category found with the specified link.");
      return [];
    }

    const categoryDoc = categorySnapshot.docs[0];
    const categoryRef = doc(firestore, "Categories", categoryDoc.id);

    const projectsQuery = query(
      collection(firestore, "Projects"),
      where("categoryId", "==", categoryRef)
    );

    const projectsSnapshot = await getDocs(projectsQuery);

    const projects = projectsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return projects;
  } catch (error) {
    console.error("Error fetching projects by category link:", error);
    return [];
  }
}
