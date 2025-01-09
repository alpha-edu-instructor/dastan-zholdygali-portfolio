import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@utils/routes";
import { IAppRoute } from "@utils/interfaces";
import { useAuth } from "@hooks/useAuth";
import { ADMIN_WORKS_PAGE_ROUTE, HOME_PAGE_ROUTE } from "@utils/consts";

const AppRouter: React.FC = () => {
  const { isAuth } = useAuth();
  const authRoutes: IAppRoute[] = isAuth
    ? routes
    : routes.filter((route) => !route.authOnly);

  console.log(authRoutes);

  return (
    <Routes>
      {authRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={
          <Navigate to={isAuth ? ADMIN_WORKS_PAGE_ROUTE : HOME_PAGE_ROUTE} />
        }
      />
    </Routes>
  );
};

export default AppRouter;
