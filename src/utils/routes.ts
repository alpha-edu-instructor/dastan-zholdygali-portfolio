import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";
import LoginPage from "@pages/LoginPage";
import AdminWorksPage from "@pages/AdminWorksPage";
import ProjectsPage from "@pages/ProjectsPage";
import AdminCategoryPage from "@pages/AdminCategoryPage";
import {
  ABOUT_PAGE_ROUTE,
  ADMIN_PROJECT_PAGE_ROUTE,
  ADMIN_WORKS_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
  PROJECTS_PAGE_ROUTE
} from "./consts";
import { IAppRoute } from "./interfaces";

export const routes: IAppRoute[] = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
    authOnly: false
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage,
    authOnly: false
  },
  {
    path: CONTACT_PAGE_ROUTE,
    element: ContactPage,
    authOnly: false
  },
  {
    path: PORTFOLIO_PAGE_ROUTE,
    element: PortfolioPage,
    authOnly: false
  },
  {
    path: PROJECTS_PAGE_ROUTE,
    element: ProjectsPage,
    authOnly: false
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage,
    authOnly: false
  },
  {
    path: ADMIN_WORKS_PAGE_ROUTE,
    element: AdminWorksPage,
    authOnly: true
  },
  {
    path: ADMIN_PROJECT_PAGE_ROUTE,
    element: AdminCategoryPage,
    authOnly: true
  }
];
