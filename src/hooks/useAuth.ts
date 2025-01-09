import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebaseConfig/config";

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);

  return { isAuth: !!user, user, isLoading: loading, error };
};
