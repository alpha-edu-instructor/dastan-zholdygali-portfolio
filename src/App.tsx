import Layout from "@components/core/Layout";
import AppRouter from "@components/core/AppRouter";
import Loader from "@components/shared/Loader";
import { useUpdateUser } from "@hooks/useUpdateUser";
import { useAuth } from "@hooks/useAuth";
import "./assets/css/style.css";

function App() {
  const { user, isLoading } = useAuth();
  useUpdateUser(user);

  if (isLoading) {
    return <Loader isFullPage={true} />;
  }

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
