import { Routes, Route } from "react-router-dom";
import { routes } from "@utils/routes";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
