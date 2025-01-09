import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
import { storage } from "./config";
import { v4 as uuidv4 } from "uuid";

export const uploadImage = (
  collection: string,
  file: File
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${collection}/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed", error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          })
          .catch(reject);
      }
    );
  });
};

export const deleteImage = (filePath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const fileRef = ref(storage, filePath);
    deleteObject(fileRef)
      .then(() => {
        console.log(`File at path ${filePath} successfully deleted`);
        resolve();
      })
      .catch((error) => {
        console.error(`Failed to delete file at path ${filePath}`, error);
        reject(error);
      });
  });
};