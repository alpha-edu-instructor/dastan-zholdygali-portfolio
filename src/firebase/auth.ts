import { FirebaseError } from "@firebase/app";
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "./config";

export const firebaseAuthSignIn = async (
  email: string,
  password: string
): Promise<string | User> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (user) {
      return user;
    }
  } catch (error: unknown) {
    const firebaseError = error as FirebaseError;
    console.error("Error signing in:", firebaseError);
    return firebaseError.code;
  }

  return "unknown-error";
};

export const firebaseAuthSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
