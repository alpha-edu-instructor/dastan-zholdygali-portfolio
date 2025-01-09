import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";
import LoginPage from "@pages/LoginPage";
import AdminWorksPage from "@pages/AdminWorksPage";
import {
  ABOUT_PAGE_ROUTE,
  ADMIN_WORKS_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE
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
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage,
    authOnly: false
  },
  {
    path: ADMIN_WORKS_PAGE_ROUTE,
    element: AdminWorksPage,
    authOnly: true
  }
];
