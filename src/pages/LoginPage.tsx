import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuthSignIn } from "@firebaseConfig/auth";
import { setUser } from "@redux/slices/userSlice";
import { useAppDispatch } from "@hooks/reduxHooks";
import { useAuth } from "@hooks/useAuth";
import Submit from "@components/shared/Submit";
import Input from "@components/shared/Input";
import { getErrorMessage } from "@utils/errors";
import { ADMIN_WORKS_PAGE_ROUTE } from "@utils/consts";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signIn = async (event: FormEvent) => {
    setError("Loading...");
    event.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      const authResult = await firebaseAuthSignIn(email, password);

      if (typeof authResult === "string") {
        setError(getErrorMessage(authResult));
      } else {
        const { email, uid } = authResult;
        const token = await authResult.getIdToken();
        dispatch(
          setUser({
            email,
            token,
            id: uid
          })
        );
        navigate(ADMIN_WORKS_PAGE_ROUTE);
      }
    } else {
      setError("Error: Fill all the fields");
    }
  };

  if (isAuth) {
    navigate(ADMIN_WORKS_PAGE_ROUTE);
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={signIn}>
        <h1 className="login-title">Sign in</h1>
        <Input
          title="E-mail"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          title="Password"
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div>
          <Submit title="Sign in" />
        </div>
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
